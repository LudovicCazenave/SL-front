import { useEffect, useState } from "react";

import { getAllEvents } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import EventsFilter from "../../components/EventsFilter/EventsFilter.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EventsPage(){

  const [events, setEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

  useEffect(() => {
    async function loadEvents(){
      const data = await getAllEvents();
      if(data){
        setEvents(data);
      }
    }
    loadEvents();
  },[]);
  console.log(events)

  const filteredEvents = events.filter((event) =>{
    const matchesCity = selectedCity ? event.city === selectedCity : true;

    const matchesLabels = selectedLabels.length > 0 ? selectedLabels.includes(event.label.name) : true;

    return matchesCity && matchesLabels;
  });

  

  return(
    <section>
      <Container fluid="lg" className="bg-secondary my-3 py-3">
        <EventsFilter setSelectedCity={setSelectedCity} setSelectedLabels={setSelectedLabels} />
        <Row>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
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