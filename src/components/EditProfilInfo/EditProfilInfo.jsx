import "./EditProfilInfo.scss"; 

import { useState } from "react";

import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Functional component for editing general profile information
function EditProfilInfo({ handleBackToMain }) {
  // Initialize form state with default values for smoker, pet, and music preferences
  const [formData, setFormData] = useState({
    smoker: "",
    pet: "",
    music: "",
  });

  // Event handler to update state when an input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the specific form field in the state
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with only the fields that have a value
    const dataToUpdate = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    try {
      // Call the API to update the user's profile using the filtered data
      const updatedUser = await editMyAccount(dataToUpdate);
      if (updatedUser) {
        // Notify the user that the profile was successfully updated
        successProfileUpdate();
        // Return to the main view
        handleBackToMain();
      } else {
        // Show an error if the update did not succeed
        showErrorMessage("Erreur lors de la mise à jour du profil.");
      }
    } catch (error) {
      // Log the error (can be replaced with a logging service in production)
      console.error("Erreur lors de la mise à jour du profil :", error);
      // Display an error message to the user
      showErrorMessage("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    // Container for the form with styling and formatting classes
    <Container className="bg-white rounded text-center py-4 my-3 mx-auto size-format">
      <h1 className="border-bottom mb-3 pb-3">Modification Générale</h1>
      
      {/* Form for editing profile information */}
      <Form onSubmit={handleSubmit}>
        {/* Group for smoker selection */}
        <Form.Group as="fieldset" className="mb-4">
          <Form.Label as="legend">Fumeur</Form.Label>
          {/* Radio button for "Yes" */}
          <Form.Check
            type="radio"
            id="edit-smoke-yes"
            name="smoker"
            label="Oui"
            value="true"
            onChange={handleChange}
            checked={formData.smoker === "true"}
          />
          {/* Radio button for "No" */}
          <Form.Check
            type="radio"
            id="edit-smoke-no"
            name="smoker"
            label="Non"
            value="false"
            onChange={handleChange}
            checked={formData.smoker === "false"}
          />
        </Form.Group>
        
        {/* Group for pet ownership selection */}
        <Form.Group as="fieldset" className="mb-4">
          <Form.Label as="legend">Animaux de compagnie</Form.Label>
          {/* Radio button for "Yes" */}
          <Form.Check
            type="radio"
            id="edit-pet-yes"
            name="pet"
            label="Oui"
            value="true"
            onChange={handleChange}
            checked={formData.pet === "true"}
          />
          {/* Radio button for "No" */}
          <Form.Check
            type="radio"
            id="edit-pet-no"
            name="pet"
            label="Non"
            value="false"
            onChange={handleChange}
            checked={formData.pet === "false"}
          />
        </Form.Group>
        
        {/* Group for editing musical style */}
        <Form.Group className="mb-4">
          <Form.Label htmlFor="edit-music">Style de musique</Form.Label>
          {/* Text input for the new music style */}
          <Form.Control
            type="text"
            id="edit-music"
            name="music"
            placeholder="Votre nouveau style de musique"
            onChange={handleChange}
          />
        </Form.Group>
        
        {/* Row containing the submit and cancel buttons */}
        <Row className="d-flex justify-content-center gap-2 my-3">
          <Col xs="auto">
            {/* Submit button to validate the changes */}
            <Button size="lg" type="submit">
              Valider
            </Button>
          </Col>
          <Col xs="auto">
            {/* Cancel button to go back to the main view without changes */}
            <Button variant="dark" size="lg" type="button" onClick={handleBackToMain}>
              Annuler
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditProfilInfo;