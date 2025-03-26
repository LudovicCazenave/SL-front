import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSlide1({ nextSlide, updateFormData }) {
 
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const formData = {
      height: e.target.height.value, 
    };

    updateFormData(formData);
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
      <Button type="submit" className="my-3">Valider</Button>
    </Form>
  );
}

export default FormSlide1;