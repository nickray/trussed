use crate::{
    api::{Reply, Request},
    error::Error,
    platform::Platform,
    service::ServiceResources,
    types::ClientContext,
};

pub enum BackendId<C> {
    Software,
    Custom(C),
}

pub trait Backend<P: Platform> {
    fn reply_to(
        &mut self,
        client_ctx: &mut ClientContext,
        request: &Request,
        resources: &mut ServiceResources<P>,
    ) -> Result<Reply, Error>;
}

pub trait Backends<P: Platform> {
    type Id: 'static;

    fn select(&mut self, id: &Self::Id) -> Option<&mut dyn Backend<P>>;
}

impl<P: Platform> Backends<P> for () {
    type Id = ();

    fn select(&mut self, _id: &Self::Id) -> Option<&mut dyn Backend<P>> {
        None
    }
}
