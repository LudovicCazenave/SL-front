import { useState } from "react";

import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilInfo({handleBackToMain}){

  const [formData, setFormData] = useState({
    smoker: "",
    pet: "",
    music: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToUpdate = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    try {
      const updatedUser = await editMyAccount(dataToUpdate);
      if (updatedUser) {
        successProfileUpdate();
        handleBackToMain();
      } else {
        showErrorMessage("Erreur lors de la mise à jour du profil.");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
      showErrorMessage("Erreur lors de la mise à jour du profil.");
    }
  };


  return (
    <Container className="bg-white rounded text-center p-4 my-3" style={{ maxWidth: "800px" }}>
      <h1 className="border-bottom mb-3 pb-3">Modification Générale</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-smoker">Fumeur</Form.Label>
          <Form.Check type="radio" id="edit-smoke-yes" name="smoker" label="Oui" value="true" onChange={handleChange} checked={formData.smoker === "true"} />
          <Form.Check type="radio" id="edit-smoke-no" name="smoker" label="Non" value="false" onChange={handleChange} checked={formData.smoker === "false"} />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-pet">Animaux de compagnie</Form.Label>
          <Form.Check type="radio" id="edit-pet-yes" name="pet" label="Oui" value="true" onChange={handleChange} checked={formData.pet === "true"} />
          <Form.Check type="radio" id="edit-pet-no" name="pet" label="Non" value="false" onChange={handleChange} checked={formData.pet === "false"} />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-music">Style de musique</Form.Label>
          <Form.Control type="text" id="edit-music" name="music" placeholder="Votre nouveau style de musique" onChange={handleChange} />
        </Form.Group>
        <Row className="d-flex justify-content-center gap-2 my-3">
          <Col xs="auto">
            <Button size="lg" type="submit">Valider</Button>
          </Col>
          <Col xs="auto">
            <Button variant="dark" size="lg" type="button" onClick={handleBackToMain}>Annuler</Button>  
          </Col>
        </Row>
      </Form>         
    </Container>
  );
};

export default EditProfilInfo;