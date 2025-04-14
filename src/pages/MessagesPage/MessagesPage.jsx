import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactList from "../../components/ContactList/ContactList.jsx";
import MessageContent from "../../components/MessageContent/MessageContent.jsx";

function MessagesPage(){
 return(
  <section>
    <Container fluid="lg">
      <Row>
        <Col xs={12} lg={2}>
          <ContactList />
        </Col>
        <Col xs={12} lg={10}>
          <MessageContent />
        </Col>
      </Row>
    </Container>
  </section>
 )
};

export default MessagesPage;