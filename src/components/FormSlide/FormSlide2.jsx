import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// FormSlide2 component captures the user's marital status.
function FormSlide2({ nextSlide, updateFormData }) {
  // Handle the form submission event.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract the marital status value from the form.
    const formData = {
      marital: e.target.marital.value,
    };

    // Update the form data in the parent component.
    updateFormData(formData);
    // Move to the next slide in the multi-step form.
    nextSlide();
  };

  return (
    <Form key="form-slide-2" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="marital">
          Votre situation familiale *
        </Form.Label>
        <Form.Select
          id="marital"
          className="focus-primary"
          name="marital"
          required
          defaultValue="Votre situation"
        >
          {/* Default option prompts the user to select their marital status */}
          <option value="">Votre situation</option>
          <option value="Divorcé">Divorcé(e)</option>
          <option value="Veuf/veuve">Veuf/Veuve</option>
          <option value="Séparé">Séparé(e)</option>
          <option value="Célibataire">Célibataire</option>
        </Form.Select>
      </Form.Group>
      <Button size="lg" type="submit" className="my-3">
        Valider
      </Button>
    </Form>
  );
}

export default FormSlide2;
