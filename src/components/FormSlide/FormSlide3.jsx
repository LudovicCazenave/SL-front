import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FormSlide3 component collects the user's zodiac sign.
// The user can either submit their sign or choose to skip this slide.
function FormSlide3({ nextSlide, updateFormData }) {
  // Handle form submission: retrieve the zodiac value, update the form data, and proceed to the next slide.
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      zodiac: e.target.zodiac.value,
    };

    updateFormData(formData); // Update the parent component's form data
    nextSlide(); // Move to the next slide
  };

  // Allow the user to skip this slide without providing a zodiac sign.
  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form key="form-slide-3" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="zodiac">Votre signe astrologique</Form.Label>
        <Form.Select
          id="zodiac"
          className="focus-primary"
          name="zodiac"
          defaultValue="Votre signe"
        >
          {/* Default option prompts the user to choose a zodiac sign */}
          <option value="">Choisissez votre signe</option>
          <option value="Bélier">Bélier</option>
          <option value="Taureau">Taureau</option>
          <option value="Gémeaux">Gémeaux</option>
          <option value="Cancer">Cancer</option>
          <option value="Lion">Lion</option>
          <option value="Vierge">Vierge</option>
          <option value="Balance">Balance</option>
          <option value="Scorpion">Scorpion</option>
          <option value="Sagittaire">Sagittaire</option>
          <option value="Capricorne">Capricorne</option>
          <option value="Verseau">Verseau</option>
          <option value="Poissons">Poissons</option>
        </Form.Select>
      </Form.Group>
      {/* Row with two columns: one for the submit button and one for the skip option */}
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
};

export default FormSlide3;