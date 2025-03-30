import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSlide8({ nextSlide, updateFormData }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileInput = e.target.picture.files[0];
    const formData = fileInput
      ? { picture: fileInput.name }
      : {};

    updateFormData(formData);
  };

  
  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form key="form-slide-8" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="picture">Choisissez une photo de profil</Form.Label>
        <Form.Control type="file" id="picture" name="picture" accept="image/*" />
      </Form.Group>
      <Row className="d-flex justify-content-center gap-2 my-3">
        <Col xs="auto">
          <Button size="lg" type="submit">Valider</Button>
        </Col>
        <Col xs="auto">
          <Button size="lg" variant="dark" type="button" onClick={handleSkip}>
            Passer
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSlide8;