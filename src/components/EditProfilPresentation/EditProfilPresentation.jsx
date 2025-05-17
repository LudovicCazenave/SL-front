import "./EditProfilPresentation.scss"; 

import { useState } from "react";

// Import the API function to update the account and functions to handle success and error messages
import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

// Import necessary components from React Bootstrap for layout and styling
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Component for editing the introduction text in the user's profile
function EditProfilPresentation({ handleBackToMain }) {
  // State to hold the form data. Initially, the description is empty.
  const [formData, setFormData] = useState({ description: "" });

  // Handle changes in the textarea input. Updates the corresponding field in the state.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to update the profile's introduction text.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object that contains only the fields with non-empty values
    const dataToUpdate = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    try {
      // Call the API to update the user's account data with the filtered form information.
      const updatedUser = await editMyAccount(dataToUpdate);

      if (updatedUser) {
        // If the update is successful, display a success message and return to the main view.
        successProfileUpdate();
        handleBackToMain();
      } else {
        // If the response is falsy, show an error message.
        showErrorMessage("Erreur lors de la mise à jour du profil.");
      }
    } catch (error) {
      // Log the error and show an error message if something goes wrong during the API call.
      console.error("Erreur lors de la mise à jour du profil :", error);
      showErrorMessage("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    // Main container with styling classes for a white background, rounded corners, and padding.
    <Container className="bg-white rounded text-center p-4 my-3 mx-auto size-format">
      {/* Header title for the edit presentation section */}
      <h1 className="border-bottom mb-3 pb-3">Modification texte d'introduction</h1>
      
      {/* Form to handle the update of the introduction text */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-5">
          {/* Label for the textarea providing instructions to the user */}
          <Form.Label htmlFor="edit-presentation">
            Présentez-vous en quelques mots
          </Form.Label>
          {/* Textarea control where the user enters their new introduction text */}
          <Form.Control
            as="textarea"
            id="edit-presentation"
            name="description"
            placeholder="Entrez votre nouveau texte d'introduction"
            onChange={handleChange}
          />
        </Form.Group>
        
        {/* Row to align the action buttons (Submit and Cancel) */}
        <Row className="d-flex justify-content-center gap-2 my-3">
          <Col xs="auto">
            {/* Button to submit the form and update the account */}
            <Button size="lg" type="submit">
              Valider
            </Button>
          </Col>
          <Col xs="auto">
            {/* Button to cancel the operation and go back to the previous view */}
            <Button variant="dark" size="lg" type="button" onClick={handleBackToMain}>
              Annuler
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditProfilPresentation;