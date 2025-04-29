import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSlide1({ nextSlide, updateFormData, formData}) {

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const heightValue = Number(e.target.height.value);

    const newFormData = {
      ...formData,
      height: heightValue, 
    };

    updateFormData(newFormData);

    nextSlide(1);
  };

  return (
    <Form key="form-slide-1" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="height">Quelle est votre taille ? (en cm) *</Form.Label>
        <Form.Control
          type="number"
          id="height"
          name="height"
          required
          min="100"
          max="210"
          placeholder="Votre taille en cm"
        />
      </Form.Group>
      <Button size="lg" type="submit" className="my-3">Valider</Button>
    </Form>
  );
}

export default FormSlide1;