import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FormSlide4 component collects the user's smoking status.
// The user can either submit their answer or choose to skip the slide.
function FormSlide4({ nextSlide, updateFormData }) {
  // Handle form submission and update the parent's form data
  const handleSubmit = (e) => {
    e.preventDefault();

    // Capture the value from the 'smoker' radio group
    const formData = {
      smoker: e.target.smoker.value,
    };

    updateFormData(formData); // Pass the data up to the parent
    nextSlide(); // Go to the next slide
  };

  // Allow the user to skip this slide without providing an answer
  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form key="form-slide-4" className="text-center" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="smoker">Est-ce que vous fumez ?</Form.Label>
            <Form.Check
              type="radio"
              id="smoke-yes"
              label="Oui"
              name="smoker"
              value="true"
            />
            <Form.Check
              type="radio"
              id="smoke-no"
              label="Non"
              name="smoker"
              value="false"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center gap-2 my-3">
        <Col xs="auto">
          <Button size="lg" type="submit">
            Valider
          </Button>
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