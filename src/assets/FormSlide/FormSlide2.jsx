import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSlide2({ nextSlide, updateFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const formData = {
      marital: e.target.marital.value,
    };

    updateFormData(formData);
  };

  return (
    <Form key="form-slide-2" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="marital">Votre situation familiale *</Form.Label>
        <Form.Select
          id="marital"
          className="focus-primary"
          name="marital"
          required
          defaultValue="Votre situation"
        >
          <option value="">Votre situation</option>
          <option value="Divorcé">Divorcé(e)</option>
          <option value="Veuf/veuve">Veuf/Veuve</option>
          <option value="Séparé">Séparé(e)</option>
          <option value="Célibataire">Célibataire</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="my-3">Valider</Button>
    </Form>
  );
}

export default FormSlide2;