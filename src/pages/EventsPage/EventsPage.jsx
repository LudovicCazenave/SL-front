import { useEffect, useState } from "react";

import { getAllEvents } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import EventsFilter from "../../components/EventsFilter/EventsFilter.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EventsPage(){

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents(){
      const data = await getAllEvents();
      if(data){
        setEvents(data);
      }
    }
    loadEvents();
  },[]);

  return(
    <section>
      <Container fluid="lg" className="bg-secondary my-3 py-3">
        <EventsFilter />
        <Row>
          {events.length > 0 ? (
            events.map((event) => (
              <Col key={event.id} xs={12} md={6} xl={4}>
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
export default EventsPage;