import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSlide5({ nextSlide, updateFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      pet: e.target.pet.value,
    };

    updateFormData(formData);
    nextSlide();
  };

  return (
    <Form key="form-slide-5" className="text-center" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="pet">Avez-vous des animaux de compagnie ? *</Form.Label>
            <Form.Check type="radio" id="animals-yes" label="Oui" name="pet" value="true" required />
            <Form.Check type="radio" id="animals-no" label="Non" name="pet" value="false" required />
          </Form.Group>
        </Col>
      </Row>
      <Button size="lg" type="submit" className="my-3">Valider</Button>
    </Form>
  );
}

export default FormSlide5;