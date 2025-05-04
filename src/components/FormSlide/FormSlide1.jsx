import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// FormSlide1 component handles the first slide of a multi-step form.
// It asks for the user's height in centimeters.
function FormSlide1({ nextSlide, updateFormData, formData }) {
  // Submit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the height value from the form and convert it to a number
    const heightValue = Number(e.target.height.value);

    // Merge the new height value with the existing form data
    const newFormData = {
      ...formData,
      height: heightValue,
    };

    // Update the form data in the parent component
    updateFormData(newFormData);

    // Move to the next slide
    nextSlide(1);
  };

  return (
    <Form key="form-slide-1" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="height">
          Quelle est votre taille ? (en cm) *
        </Form.Label>
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
      <Button size="lg" type="submit" className="my-3">
        Valider
      </Button>
    </Form>
  );
}

export default FormSlide1;