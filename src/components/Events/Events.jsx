import "./Events.scss"; 

import EventCard from "../EventCard/EventCard.jsx"; 

import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 

// The Events component receives an array of event objects as a prop.
function Events({ events }) {
  return (
    <section>
      {/* Main container with centered text, top margin, and a secondary background */}
      <Container fluid="lg" className="text-center mt-5 bg-secondary">
        {/* Section title with primary background and full-width styling */}
        <h2 className="bg-primary text-white py-3 full-width-title">
          Nos derniers événements
        </h2>
        {/* Row to arrange EventCards in a grid layout */}
        <Row>
          {events.length > 0 ? (
            // If events exist, map each event into a column with an EventCard component.
            events.map((event) => (
              <Col key={event.id} xs={12} lg={6}>
                <EventCard event={event} />
              </Col>
            ))
          ) : (
            // If there are no events, display a message.
            <p>Aucun événement à afficher</p>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Events;
