import Container from "react-bootstrap/Container"; // Import Container for layout

// EventTitle component renders the event's title and any additional children.
function EventTitle({ event, children }) {
  // If no event is provided, show a message indicating the event data is unavailable
  if (!event) {
    return (
      <Container>
        <p>Données de l'évènement indisponibles.</p>
      </Container>
    );
  }

  // When event data exists, display the title and optional children
  return (
    <Container fluid="lg" className="text-center my-3">
      <h1 className="full-width-title">{event.title}</h1>
      {children}
    </Container>
  );
}

export default EventTitle;