import "./EditProfilSection.scss";

import { useState } from "react";
import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilSection({ handleBackToMain }) {
  // State to store form inputs for picture, firstname, and city
  const [formData, setFormData] = useState({
    picture: null,
    firstname: "",
    city: "",
  });

  // Handle input changes and update the state accordingly
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // For file input (profile picture), take the first selected file
    if (name === "picture" && files.length > 0) {
      setFormData((prev) => ({ ...prev, picture: files[0] }));
    } else {
      // For text inputs and select, update the value
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission to update the profile data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out any empty values before sending data to the API
    const dataToUpdate = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    try {
      // Call the API to update the user profile
      const updatedUser = await editMyAccount(dataToUpdate);
      if (updatedUser) {
        // If update is successful, show a success message and navigate back
        successProfileUpdate();
        handleBackToMain();
      } else {
        // If update fails, display an error message
        showErrorMessage("Erreur lors de la mise à jour du profil.");
      }
    } catch (error) {
      // Log the error and show an error message
      console.error("Erreur lors de la mise à jour du profil :", error);
      showErrorMessage("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    <Container className="bg-white rounded text-center py-4 my-3 mx-auto size-format">
      {/* Section title */}
      <h1 className="border-bottom mb-3 pb-3">Modification Identité</h1>
      {/* Form with multipart encoding to handle file uploads */}
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Input group for profile picture */}
        <Form.Group className="mb-4">
          <Form.Label htmlFor="edit-picture">
            Télécharger une photo de profil
          </Form.Label>
          <Form.Control
            type="file"
            id="edit-picture"
            name="picture"
            accept="image/*"
            onChange={handleChange}
          />
        </Form.Group>
        {/* Input group for first name */}
        <Form.Group className="mb-4">
          <Form.Label htmlFor="edit-firstname">Prénom</Form.Label>
          <Form.Control
            type="text"
            id="edit-firstname"
            name="firstname"
            placeholder="Entrez votre nouveau prénom"
            onChange={handleChange}
          />
        </Form.Group>
        {/* Select dropdown for city */}
        <Form.Group className="mb-4">
          <Form.Label htmlFor="city">Ville</Form.Label>
          <Form.Select
            id="city"
            className="focus-primary"
            name="city"
            required
            defaultValue="Votre ville"
            onChange={handleChange}
          >
            <option value="">Votre ville</option>
            <option value="PARIS">Paris</option>
            <option value="LYON">Lyon</option>
            <option value="TOULOUSE">Toulouse</option>
            <option value="MARSEILLE">Marseille</option>
          </Form.Select>
        </Form.Group>
        {/* Row for action buttons */}
        <Row className="d-flex justify-content-center gap-2 my-3">
          <Col xs="auto">
            <Button size="lg" type="submit">
              Valider
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="dark"
              size="lg"
              type="button"
              onClick={handleBackToMain}
            >
              Annuler
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditProfilSection;