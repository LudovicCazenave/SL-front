import "./EventPage.scss"

import {useEffect, useState } from "react";
import { useParams } from "react-router";

import { getOneEvent } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventTitle from "../../components/EventTitle/EventTitle.jsx";
import EventSection from "../../components/EventSection/EventSection.jsx";
import EventLocation from "../../components/EventLocation/EventLocation.jsx";
import EventDescription from "../../components/EventDescription/EventDescription.jsx";

function EventPage(){

  const { slug } = useParams();
  const [event,setEvent] = useState(null);

  useEffect(() => {

    async function loadEvent(){
      const data = await getOneEvent(slug);
      if(data){
        setEvent(data);
      }
    };
    loadEvent()
  }, [slug]);

  return (
    <>
      <EventTitle event={event} />
      <section>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div>
                <EventSection event={event} />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <EventLocation event={event} />
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <EventDescription event={event} />
            </Col>
          </Row>
          <Row className="text-center my-3">
            <Col>
              <Button size="lg" variant="warning">
                S'inscrire
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );

};

export default EventPage;