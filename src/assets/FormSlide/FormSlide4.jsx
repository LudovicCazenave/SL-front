import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSlide4({ nextSlide, updateFormData }) {
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      smoker: e.target.smoker.value,
    };

    updateFormData(formData);
    nextSlide();
  };

  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form key="form-slide-4" className="text-center" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="smoker">Est-ce que vous fumez ?</Form.Label>
            <Form.Check type="radio" id="smoke-yes" label="Oui" name="smoker" value="true" />
            <Form.Check type="radio" id="smoke-no" label="Non" name="smoker" value="false" />
          </Form.Group>
        </Col>
      </Row>
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

export default FormSlide4;