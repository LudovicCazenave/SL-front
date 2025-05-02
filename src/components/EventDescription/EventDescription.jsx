import Container from "react-bootstrap/Container"; // Import the Container component for layout

// Component that displays the description of an event.
// It receives an "event" object and optional children to render additional content.
function EventDescription({ children, event }) {
  // If the event data is missing, render a fallback message inside a Container.
  if (!event) {
    return (
      <Container>
        <p>Données de l'évènement indisponibles.</p>
      </Container>
    );
  }

  // If event data is available, render the event's description along with any children elements.
  return (
    <Container className="bg-white my-3 py-4 rounded text-center">
      <article>
        <h2 className="mb-3">Description</h2>
        <p>{event.description}</p>
        {children} {/* Additional content can be inserted here */}
      </article>
    </Container>
  );
}

export default EventDescription;