import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


function MessageContent(){
  return (
    <>
      <Container fluid="lg" className="bg-primary mt-lg-3 rounded-top">
        <h2 className="h1 text-white text-center">Baptiste</h2>
      </Container>
      <Container fluid="lg"   className="bg-white py-3 rounded-bottom">
        <div className="text-start mb-2">
          <p className="bg-secondary rounded d-inline-block p-2"style={{ maxWidth: "75%", wordWrap: "break-word" }}>
            <strong>Contenu du message de mon interlocuteur</strong>
          </p>
        </div>
        <div  className="text-end mb-2">
          <p className="bg-info rounded d-inline-block p-2" style={{ maxWidth: "75%", wordWrap: "break-word" }}>
            <strong>Contenu de mon message</strong> 
            </p> 
        </div>
      </Container>
      <Container fluid="lg" className="py-3">
        <InputGroup>
          <Form.Control type="text" size="lg" placeholder="Votre message..." />
          <Button variant="primary" type="submit">Envoyer</Button>
        </InputGroup>
      </Container>
    </>
  );
};

export default MessageContent;