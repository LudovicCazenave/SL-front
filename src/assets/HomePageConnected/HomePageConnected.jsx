import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventCard from "../EventCard/EventCard.jsx";
import ProfilCard from "../ProfilCard/ProfilCard.jsx";

function HomePageConnected(){
  return (
    <section>
      <Container fluid="lg" className="px-0">
        <Row className="d-flex flex-column flex-lg-row-reverse">
          <Col >
            <Container fluid="lg" className="text-center mt-5 px-0">
              <h2 className="bg-primary text-white py-3">Profils selectionnés</h2>
              <ProfilCard />
            </Container>
          </Col>
          <Col lg="4">
            <Container fluid="lg" className="text-center my-5 bg-secondary px-0">
              <h2 className="bg-primary text-white py-3">Évènements à venir</h2>
              <EventCard />
            </Container>
          </Col>  
        </Row> 
      </Container>
    </section>
  );
};

export default HomePageConnected;