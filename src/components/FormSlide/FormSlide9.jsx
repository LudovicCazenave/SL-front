import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSlide9({ nextSlide, updateFormData }) {

  // Handle the form submission event
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Create an object containing the trimmed description input value
    const formData = {
      description: e.target.description.value.trim(),
    };

    updateFormData(formData); // Update the parent component's form data
    nextSlide(); // Advance to the next slide
  };

  // Handle skipping this slide without input
  const handleSkip = () => {
    nextSlide(); 
  };

  return (
    <Form key="form-slide-9" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        
        <Form.Label htmlFor="description">Présentez-vous en quelques mots</Form.Label>
        <Form.Control
          as="textarea" 
          id="description"
          name="description"
          placeholder="Dites-nous en plus sur vous…" 
        />
      </Form.Group>
      <Row className="d-flex justify-content-center gap-2 my-3">
        <Col xs="auto">
          <Button size="lg" type="submit">Valider</Button>
        </Col>
        <Col xs="auto">
          <Button size="lg" variant="dark" type="button" onClick={handleSkip}>Passer</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSlide9;