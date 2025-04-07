import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilPresentation({handleBackToMain}){

  return (
    <Container className="bg-white rounded text-center p-4 my-3" style={{ maxWidth: "800px" }}>
      <h1 className="border-bottom mb-3 pb-3">Modification texte d'introduction</h1>
      <Form>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-presentation">Présentez-vous en quelques mots</Form.Label>
          <Form.Control as="textarea" id="edit-presentation" name="description" placeholder="Entrez votre nouveau texte d'introduction" />
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

export default EditProfilPresentation;