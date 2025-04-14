import Container from "react-bootstrap/Container";

function EventTitle({ event, children }) {

  if (!event) {
    return <Container><p>Données de l'évènement indisponibles.</p></Container>;
  }

 return (
    <Container fluid="lg" className="text-center my-3">
      <h1 className="full-width-title">{event.title}</h1>
      {children}
    </Container>
 );
};

export default EventTitle;