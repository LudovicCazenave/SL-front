import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilInterest({handleBackToMain}){

  return (
    <Container className="bg-white rounded text-center p-4 my-3" style={{ maxWidth: "800px" }}>
      <h1 className="border-bottom mb-3 pb-3">Modification centres d'intérêts</h1>
      <Form>
        <Form.Group className="my-5">
          <Form.Check id="nature" label="Nature" name="labels" value="1" />
          <Form.Check id="culture" label="Culture" name="labels" value="2" />
          <Form.Check id="sport" label="Sports/bien-être" name="labels" value="6" />
          <Form.Check id="soiree-a-theme" label="Soirée à thème" name="labels" value="5" />
          <Form.Check id="artistique" label="Artistique" name="labels" value="3" />
          <Form.Check id="jeux-de-societe" label="Jeux de société" name="labels" value="4" />
        </Form.Group>
        <Row className="d-flex justify-content-center gap-2 my-3">
          <Col xs="auto">
            <Button size="lg" type="submit">Valider</Button>
          </Col>
          <Col xs="auto">
            <Button variant="dark" size="lg" type="button" onClick={handleBackToMain}>Annuler</Button>  
          </Col>
        </Row>
      </Form>         
    </Container>
  );
};

export default EditProfilInterest;