#![cfg(feature = "virt")]

use trussed::{
    api::{reply::ReadFile, Reply, Request},
    backend::{self, BackendId},
    client::FilesystemClient as _,
    error::Error,
    platform,
    service::{Service, ServiceResources},
    types::{ClientContext, Location, Message, PathBuf},
    virt::{self, Ram},
    ClientImplementation,
};

type Platform = virt::Platform<Ram>;
type Client = ClientImplementation<Service<Platform, Backends>>;

const BACKENDS_TEST: &[BackendId<Backend>] =
    &[BackendId::Custom(Backend::Test), BackendId::Software];

pub enum Backend {
    Test,
}

#[derive(Default)]
struct Backends {
    test: TestBackend,
}

impl backend::Backends<Platform> for Backends {
    type Id = Backend;

    fn select(&mut self, backend: &Backend) -> Option<&mut dyn backend::Backend<Platform>> {
        match backend {
            Backend::Test => Some(&mut self.test),
        }
    }
}

#[derive(Default)]
struct TestBackend;

impl<P: platform::Platform> backend::Backend<P> for TestBackend {
    fn reply_to(
        &mut self,
        _client_id: &mut ClientContext,
        request: &Request,
        _resources: &mut ServiceResources<P>,
    ) -> Result<Reply, Error> {
        match request {
            Request::ReadFile(_) => {
                let mut data = Message::new();
                data.push(0xff).unwrap();
                Ok(Reply::ReadFile(ReadFile { data }))
            }
            _ => Err(Error::RequestNotAvailable),
        }
    }
}

fn run<F: FnOnce(&mut Client)>(backends: &'static [BackendId<Backend>], f: F) {
    virt::with_platform(Ram::default(), |platform| {
        platform.run_client_with_backends("test", Backends::default(), backends, |mut client| {
            f(&mut client)
        })
    })
}

#[test]
fn override_syscall() {
    let path = PathBuf::from("test");
    run(&[], |client| {
        assert!(trussed::try_syscall!(client.read_file(Location::Internal, path.clone())).is_err());
    });
    run(BACKENDS_TEST, |client| {
        assert_eq!(
            trussed::syscall!(client.read_file(Location::Internal, path.clone())).data,
            &[0xff]
        );
    })
}
