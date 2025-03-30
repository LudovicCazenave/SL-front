import ProfilEvents from "../assets/ProfilEvents/ProfilEvents.jsx";
import ProfilInfo from "../assets/ProfilInfo/ProfilInfo.jsx";
import ProfilInterest from "../assets/ProfilInterest/ProfilInterest.jsx";
import ProfilPresentation from "../assets/ProfilPresentation/ProfilPresentation.jsx";
import ProfilSection from "../assets/ProfilSection/ProfilSection.jsx";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function MyAccountPage(){

  return(
    <>
    <section>
      <ProfilSection />
    </section>
    <section>
      <Container className="px-0">
        <Row className="d-flex flex-column flex-lg-row-reverse">
          <Col lg="4" className="d-flex flex-column">
            <ProfilInfo />
          </Col>
          <Col>
            <ProfilPresentation />
            <ProfilInterest />
            <ProfilEvents />
          </Col>
        </Row>
      </Container>
    </section>
  </>

  );
};

export default MyAccountPage;