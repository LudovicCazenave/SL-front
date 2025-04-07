import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function EditProfilSection({handleBackToMain}){
  
  return (
    <Container className="bg-white rounded text-center p-4 my-3" style={{ maxWidth: "800px" }}>
      <h1 className="border-bottom mb-3 pb-3">Modification Identité</h1>
      <Form>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-picture">Télécharger une photo de profil</Form.Label>
          <Form.Control type="file" id="edit-picture" name="picture" accept="image/*" />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-firstname">Prénom</Form.Label>
          <Form.Control type="text" id="edit-firstname" name="firstname" placeholder="Entrez votre nouveau prénom" />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-city">Ville</Form.Label>
          <Form.Control type="text" id="edit-city" name="city" placeholder="Entrez votre nouvelle ville" />
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
export default EditProfilSection;