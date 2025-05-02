import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FormSlide6 component collects the user's musical preferences.
// The user can submit their favorite music style or skip the slide.
function FormSlide6({ nextSlide, updateFormData }) {
  // Handle the form submission by extracting the music style input,
  // trimming any extra whitespace, updating the parent form data, and moving to the next slide.
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      music: e.target.music.value.trim(),
    };

    updateFormData(formData);
    nextSlide();
  };

  // Allow the user to skip entering a music style
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

export default FormSlide6;