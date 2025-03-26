import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSlide3({ nextSlide, updateFormData }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      zodiac: e.target.zodiac.value,é
    };

    updateFormData(formData);
  };

  const handleSkip = () => {
    nextSlide();
  };

  return (
    <Form key="form-slide-3" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="zodiac">Votre signe astrologique</Form.Label>
        <Form.Select id="zodiac" className="focus-primary" name="zodiac" defaultValue="Votre signe">
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

export default FormSlide3;