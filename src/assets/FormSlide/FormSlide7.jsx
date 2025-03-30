import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSlide7({ nextSlide, updateFormData }) {
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedLabels = Array.from(e.target.labels)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const formData = {
      labels: selectedLabels,
    };

    updateFormData(formData);
  };

  return (
    <Form key="form-slide-7" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="labels">Vos centres d'intérêts (plusieurs choix possible) ? *</Form.Label>
        <Form.Check id="nature" label="Nature" name="labels" value="Nature" />
        <Form.Check id="culture" label="Culture" name="labels" value="Culturel" />
        <Form.Check id="sport" label="Sports/bien-être" name="labels" value="Sports/bien-être" />
        <Form.Check id="soiree-a-theme" label="Soirée à thème" name="labels" value="Soirée à thème" />
        <Form.Check id="artistique" label="Artistique" name="labels" value="Artistique" />
        <Form.Check id="jeux-de-societe" label="Jeux de société" name="labels" value="Jeux de société" />
      </Form.Group>
      <Button size="lg" type="submit" className="my-3">Valider</Button>
    </Form>
  );
}

export default FormSlide7;