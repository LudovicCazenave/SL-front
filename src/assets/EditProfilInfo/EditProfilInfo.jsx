import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilInfo({handleBackToMain}){

  return (
    <Container className="bg-white rounded text-center p-4 my-3" style={{ maxWidth: "800px" }}>
      <h1 className="border-bottom mb-3 pb-3">Modification Générale</h1>
      <Form>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-smoker">Fumeur</Form.Label>
          <Form.Check type="radio" id="edit-smoke-yes" name="smoker" label="Oui" value="true" />
          <Form.Check type="radio" id="edit-smoke-no" name="smoker" label="Non" value="false" />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-pet">Animaux de compagnie</Form.Label>
          <Form.Check type="radio" id="edit-pet-yes" name="pet" label="Oui" value="true" />
          <Form.Check type="radio" id="edit-pet-no" name="pet" label="Non" value="false" />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-music">Style de musique</Form.Label>
          <Form.Control type="text" id="edit-music" name="music" placeholder="Votre nouveau style de musique" />
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

export default EditProfilInfo;