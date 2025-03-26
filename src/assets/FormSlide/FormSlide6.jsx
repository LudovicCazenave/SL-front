import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSlide6({ nextSlide, updateFormData }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      music: e.target.music.value.trim(),
    };

    updateFormData(formData);
  };

  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form key="form-slide-6" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="music">Quel style de musique appréciez-vous ?</Form.Label>
        <Form.Control type="text" id="music" name="music" />
      </Form.Group>
      <Row className="d-flex justify-content-center gap-2 my-3">
        <Col xs="auto">
          <Button type="submit">Valider</Button>
        </Col>
        <Col xs="auto">
          <Button variant="dark" type="button" onClick={handleSkip}>
            Passer
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSlide6;