import "./EditProfilInterest.scss"; 

import { useState } from "react";

// Import API function for editing account data, along with success/error handlers
import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

// Import necessary React Bootstrap components for layout and styling
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Component to allow users to edit their profile interests
function EditProfilInterest({ handleBackToMain }) {
  // State to keep track of selected interest labels as an array of numbers
  const [selectedLabels, setSelectedLabels] = useState([]);

  // Handler to update the selected labels when a checkbox is toggled
  const handleLabelChange = (e) => {
    const { value, checked } = e.target;
    const labelId = Number(value); // Convert the string value to a number

    if (checked) {
      // If the checkbox is checked, add the label ID to the selectedLabels array
      setSelectedLabels((prev) => [...prev, labelId]);
    } else {
      // If unchecked, remove the label ID from the selectedLabels array
      setSelectedLabels((prev) => prev.filter((item) => item !== labelId));
    }
  };

  // Handler to process the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Prepare the data to update; add 'labels' property only if there are selected labels
    const dataToUpdate = {};
    if (selectedLabels.length > 0) {
      dataToUpdate.labels = selectedLabels;
    }

    try {
      // Call the API to update the user's account with the selected interests
      const updatedUser = await editMyAccount(dataToUpdate);
      if (updatedUser) {
        // If the update is successful, display a success message and return to main page
        successProfileUpdate();
        handleBackToMain();
      } else {
        // If update fails, display an error message
        showErrorMessage("Erreur lors de la mise à jour du profil.");
      }
    } catch (error) {
      // Log the error and show an error message to the user
      console.error("Erreur lors de la mise à jour du profil :", error);
      showErrorMessage("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    // Main container for the form with styling classes
    <Container fluid className="bg-white rounded text-center py-4 my-3 mx-auto size-format">
      {/* Header title */}
      <h1 className="border-bottom mb-3 pb-3">
        Modification centres d'intérêts
      </h1>
      {/* Form for editing profile interests */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-5">
          {/* Each Form.Check here represents one interest option */}
          <Form.Check
            id="nature"
            label="Nature"
            name="labels"
            value="1"
            onChange={handleLabelChange}
          />
          <Form.Check
            id="culture"
            label="Culture"
            name="labels"
            value="2"
            onChange={handleLabelChange}
          />
          <Form.Check
            id="sport"
            label="Sports/bien-être"
            name="labels"
            value="6"
            onChange={handleLabelChange}
          />
          <Form.Check
            id="soiree-a-theme"
            label="Soirée à thème"
            name="labels"
            value="5"
            onChange={handleLabelChange}
          />
          <Form.Check
            id="artistique"
            label="Artistique"
            name="labels"
            value="3"
            onChange={handleLabelChange}
          />
          <Form.Check
            id="jeux-de-societe"
            label="Jeux de société"
            name="labels"
            value="4"
            onChange={handleLabelChange}
          />
        </Form.Group>
        {/* Row to arrange the action buttons */}
        <Row className="d-flex justify-content-center gap-2 my-3">
          <Col xs="auto">
            {/* Submit button to validate and update interests */}
            <Button size="lg" type="submit">
              Valider
            </Button>
          </Col>
          <Col xs="auto">
            {/* Cancel button to go back without making any changes */}
            <Button variant="dark" size="lg" type="button" onClick={handleBackToMain}>
              Annuler
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditProfilInterest;