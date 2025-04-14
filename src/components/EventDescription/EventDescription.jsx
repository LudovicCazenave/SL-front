import Container from "react-bootstrap/Container";

function EventDescription({ children, event }){

  if(!event){
    return <Container><p>Données de l'évènement indisponibles.</p></Container>;
  }

  return (
    <Container className="bg-white my-3 py-4 rounded  text-center">
      <article>
        <h2 className="mb-3">Description</h2>
        <p>{event.description}</p>
        {children}
      </article>
    </Container>
  );
};

export default EventDescription;