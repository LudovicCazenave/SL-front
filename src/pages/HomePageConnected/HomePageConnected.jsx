import { useEffect, useState } from "react";

import { getLastProfilesMatch, getLastEventsMatch  } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventCard from "../../components/EventCard/EventCard.jsx";
import ProfilCard from "../../components/ProfilCard/ProfilCard.jsx";

function HomePageConnected(){

  const [events, setEvents] = useState([]);
  const [profiles, setProfiles] = useState([]);
  console.log(profiles)

  useEffect(() => {
      async function loadEvents() {
        const data = await getLastEventsMatch();
        if(data) {
          setEvents(data);
        }
      }
      loadEvents();
    },[]);

    useEffect(() => {
      async function loadProfiles() {
        const data = await getLastProfilesMatch();
        if(data) {
          setProfiles(data);
        }
      }
      loadProfiles();
    },[]);

  return (
    <section>
      <Container fluid="lg">
        <Row className="d-flex flex-column flex-lg-row-reverse">
          <Col >
            <Container fluid="lg" className="text-center mt-3">
              <h2 className="bg-primary text-white py-3">Profils selectionnés</h2>
              <Row>
                {profiles.length > 0 ? (
                  profiles.map((profil) => (
                    <Col key={profil.id} xs={12} lg={6}>
                      <ProfilCard profil={profil} />
                    </Col>
                  ))
                ) : (
                  <p>Aucun événement à afficher</p>
                )}
              </Row>
            </Container>
          </Col>
          <Col lg="4">
            <Container fluid="lg" className="text-center my-3 bg-secondary">
              <h2 className="bg-primary text-white py-3">Évènements à venir</h2>
              <Row>
                {events.length > 0 ? (
                  events.map((event) => (
                    <Col key={event.id} xs={12} lg={12}>
                      <EventCard event={event} />
                    </Col>
                  ))
                ) : (
                  <p>Aucun événement à afficher</p>
                )}
              </Row>
            </Container>
          </Col>  
        </Row> 
      </Container>
    </section>
  );
};

export default HomePageConnected;