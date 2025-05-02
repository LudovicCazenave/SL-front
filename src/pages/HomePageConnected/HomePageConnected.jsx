import { useEffect, useState } from "react";

// Import API functions for fetching the latest events and profiles matches
import { getLastProfilesMatch, getLastEventsMatch } from "../../api/api.js";

// Import Bootstrap components for layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import the EventCard and ProfilCard components to display individual events and profiles
import EventCard from "../../components/EventCard/EventCard.jsx";
import ProfilCard from "../../components/ProfilCard/ProfilCard.jsx";

function HomePageConnected() {
  // State to hold the list of upcoming events
  const [events, setEvents] = useState([]);
  // State to hold the list of selected profiles
  const [profiles, setProfiles] = useState([]);

  // Fetch the latest events when the component mounts
  useEffect(() => {
    async function loadEvents() {
      const data = await getLastEventsMatch();
      if (data) {
        setEvents(data);
      }
    }
    loadEvents();
  }, []);

  // Fetch the latest profiles when the component mounts
  useEffect(() => {
    async function loadProfiles() {
      const data = await getLastProfilesMatch();
      if (data) {
        setProfiles(data);
      }
    }
    loadProfiles();
  }, []);

  return (
    <section>
      <Container fluid="lg">
        {/* Use a flex layout that stacks columns on small screens and displays them in a reversed row on large screens */}
        <Row className="d-flex flex-column flex-lg-row-reverse">
          {/* Column displaying profiles */}
          <Col>
            <Container fluid="lg" className="text-center mt-3">
              <h2 className="bg-primary text-white py-3">Profils selectionnés</h2>
              <Row>
                {profiles.length > 0 ? (
                  // Map over the profiles and display each using the ProfilCard component
                  profiles.map((profil) => (
                    <Col key={profil.id} xs={12} lg={6}>
                      <ProfilCard profil={profil} />
                    </Col>
                  ))
                ) : (
                  // Display a message if there are no profiles
                  <p>Aucun événement à afficher</p>
                )}
              </Row>
            </Container>
          </Col>
          {/* Column displaying upcoming events */}
          <Col lg="4">
            <Container fluid="lg" className="text-center my-3 bg-secondary">
              <h2 className="bg-primary text-white py-3">Évènements à venir</h2>
              <Row>
                {events.length > 0 ? (
                  // Map over the events and display each using the EventCard component
                  events.map((event) => (
                    <Col key={event.id} xs={12} lg={12}>
                      <EventCard event={event} />
                    </Col>
                  ))
                ) : (
                  // Display a message if there are no events
                  <p>Aucun événement à afficher</p>
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomePageConnected;