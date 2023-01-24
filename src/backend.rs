use crate::{
    api::{Reply, Request},
    error::Error,
    platform::Platform,
    service::ServiceResources,
    types::ClientContext,
};

/// Default BackendId::Custom parameter,
/// corresponding to no custom backends.
pub enum Empty {}

pub enum BackendId<I = Empty> {
    Software,
    Custom(I),
}

/// The core property of a backend: reply to requests.
///
/// Cf. `async fn(Request) -> Result<Response, Error>` in `tower`.
pub trait Backend<P: Platform> {
    fn reply_to(
        &mut self,
        client_ctx: &mut ClientContext,
        request: &Request,
        resources: &mut ServiceResources<P>,
    ) -> Result<Reply, Error>;
}

/// Selection of backend by ID, to be implemented
/// in client code on a collection of injected backends
/// if the default `SoftwareOnly` collection is not used.
pub trait Select<P: Platform> {
    type Id: 'static;

    fn select(&mut self, id: &Self::Id) -> &mut dyn Backend<P>;
}

/// The default collection of backends: just the default software backend.
pub struct SoftwareOnly;

/// Blanket implementation of `Select` for the collection
/// of no custom backends.
impl<P: Platform> Select<P> for SoftwareOnly {
    type Id = Empty;

    fn select(&mut self, id: &Self::Id) -> &mut dyn Backend<P> {
        match *id {}
    }
}
