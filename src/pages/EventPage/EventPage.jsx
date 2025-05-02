import "./EventPage.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getOneEvent, registerForEvent } from "../../api/api.js";
import { successRegister, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventTitle from "../../components/EventTitle/EventTitle.jsx";
import EventSection from "../../components/EventSection/EventSection.jsx";
import EventLocation from "../../components/EventLocation/EventLocation.jsx";
import EventDescription from "../../components/EventDescription/EventDescription.jsx";

function EventPage() {
  // Extract the event slug from the URL parameters
  const { slug } = useParams();
  // Initialize state to hold the event data
  const [event, setEvent] = useState(null);

  // Fetch the event data when the component mounts or when the slug changes
  useEffect(() => {
    async function loadEvent() {
      const data = await getOneEvent(slug);
      if (data) {
        setEvent(data);
      }
    }
    loadEvent();
  }, [slug]);

  // Handle event registration when the user clicks the registration button
  const handleRegisterEvent = async () => {
    const registeredEvent = await registerForEvent(slug, {});
    if (registeredEvent) {
      await successRegister();
    } else {
      showErrorMessage("Echec lors de l'inscription ");
    }
  };

  return (
    <>
      {/* Display the event title */}
      <EventTitle event={event} />

      <section>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div>
                {/* Display the main section of the event */}
                <EventSection event={event} />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div>
                {/* Display the event location */}
                <EventLocation event={event} />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              {/* Display the event description */}
              <EventDescription event={event} />
            </Col>
          </Row>
          <Row className="text-center my-3">
            <Col>
              {/* Button for event registration */}
              <Button size="lg" variant="warning" onClick={handleRegisterEvent}>
                S'inscrire
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EventPage;