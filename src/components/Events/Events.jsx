import EventCard from "../EventCard/EventCard.jsx";

import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Events({ events }) {

  return (
    <section>
      <Container fluid="lg" className="text-center mt-5 bg-secondary px-0">
        <h2 className="bg-primary text-white py-3">Nos derniers événements</h2>
        <Row>
          {events.length > 0 ? (
            events.map((event) => (
              <Col key={event.id} xs={12} lg={6}>
                <EventCard event={event} />
              </Col>
            ))
          ) : (
            <p>Aucun événement à afficher</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Events;
