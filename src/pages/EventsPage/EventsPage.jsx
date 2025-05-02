import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import EventsFilter from "../../components/EventsFilter/EventsFilter.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EventsPage() {
  // State to store all retrieved events
  const [events, setEvents] = useState([]);
  // State to store the city selected from the filter
  const [selectedCity, setSelectedCity] = useState("");
  // State to store the labels selected from the filter
  const [selectedLabels, setSelectedLabels] = useState([]);

  // When the component mounts, fetch all events from the API
  useEffect(() => {
    async function loadEvents() {
      const data = await getAllEvents();
      if (data) {
        setEvents(data);
      }
    }
    loadEvents();
  }, []);

  // Filter the events based on the selected city and the selected labels
  const filteredEvents = events.filter((event) => {
    // Check if the event's city matches the selected city, if one is selected
    const matchesCity = selectedCity ? event.city === selectedCity : true;
    // Check if the event's label is included in the array of selected labels, if any are selected
    const matchesLabels =
      selectedLabels.length > 0
        ? selectedLabels.includes(event.label.name)
        : true;
    return matchesCity && matchesLabels;
  });

  return (
    <section>
      <Container fluid="lg" className="bg-secondary my-3 py-3">
        {/* Render filtering options */}
        <EventsFilter
          setSelectedCity={setSelectedCity}
          setSelectedLabels={setSelectedLabels}
          selectedLabels={selectedLabels}
        />
        <Row>
          {filteredEvents.length > 0 ? (
            // Map over the filtered events and render a card for each event
            filteredEvents.map((event) => (
              <Col key={event.id} xs={12} md={6} xl={4}>
                <EventCard event={event} />
              </Col>
            ))
          ) : (
            // Display a message if no events match the filter criteria
            <p>Aucun événement à afficher</p>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default EventsPage;