import "./EditProfilPresentation.scss"

import { useState } from "react";

import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilPresentation({handleBackToMain}){

  const [formData, setFormData] = useState({description: ""});

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
    <Container className="bg-white rounded text-center p-4 my-3 size-format">
      <h1 className="border-bottom mb-3 pb-3">Modification texte d'introduction</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-presentation">Présentez-vous en quelques mots</Form.Label>
          <Form.Control as="textarea" id="edit-presentation" name="description" placeholder="Entrez votre nouveau texte d'introduction" onChange={handleChange} />
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

export default EditProfilPresentation;