import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// FormSlide7 component collects the user's interests.
// The user can select multiple interests via checkboxes.
function FormSlide7({ nextSlide, updateFormData }) {
  // Handle form submission: get the values of all checked checkboxes,
  // update the parent's form data, and proceed to the next slide.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather all checkbox elements with the name "labels"
    // Convert the collection to an array, filter for those checked,
    // and map them to their value.
    const selectedLabels = Array.from(e.target.labels)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const formData = {
      labels: selectedLabels,
    };

    // Update the form data in the parent component and move to the next slide.
    updateFormData(formData);
    nextSlide();
  };

  return (
    <Form key="form-slide-7" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="labels">
          Vos centres d'intérêts (plusieurs choix possible) ? *
        </Form.Label>
        <Form.Check 
          id="nature" 
          label="Nature" 
          name="labels" 
          value="Nature"
         />

        <Form.Check 
          id="culture" 
          label="Culture" 
          name="labels" 
          value="Culturel" 
        />

        <Form.Check
          id="sport"
          label="Sports/bien-être"
          name="labels"
          value="Sports/bien-être"
        />

        <Form.Check
          id="soiree-a-theme"
          label="Soirée à thème"
          name="labels"
          value="Soirée à thème"
        />

        <Form.Check
          id="artistique"
          label="Artistique"
          name="labels"
          value="Artistique"
        />

        <Form.Check
          id="jeux-de-societe"
          label="Jeux de société"
          name="labels"
          value="Jeux de société"
        />
        
      </Form.Group>
      <Button size="lg" type="submit" className="my-3">
        Valider
      </Button>
    </Form>
  );
}

export default FormSlide7;