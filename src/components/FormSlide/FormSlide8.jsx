import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FormSlide8 component allows the user to upload a profile photo.
// The user can submit a file or choose to skip this step.
function FormSlide8({ nextSlide, updateFormData }) {
  // Handle form submission:
  // - Prevents default behavior
  // - Retrieves the selected file from the file input
  // - Updates the parent component's form data with the file (if any)
  // - Advances to the next slide.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the first file from the file input named "picture"
    const fileInput = e.target.picture.files[0];
    // If a file exists, include it in the form data; otherwise, use an empty object
    const formData = fileInput ? { picture: fileInput } : {};

    updateFormData(formData);
    nextSlide();
  };

  // Handle the case where the user chooses to skip this slide.
  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form
      key="form-slide-8"
      className="text-center"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Form.Group>
        <Form.Label htmlFor="picture">Choisissez une photo de profil</Form.Label>
        <Form.Control
          type="file"
          id="picture"
          name="picture"
          accept="image/*"
        />
      </Form.Group>
      <Row className="d-flex justify-content-center gap-2 my-3">
        <Col xs="auto">
          <Button size="lg" type="submit">
            Valider
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            size="lg"
            variant="dark"
            type="button"
            onClick={handleSkip}
          >
            Passer
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSlide8;