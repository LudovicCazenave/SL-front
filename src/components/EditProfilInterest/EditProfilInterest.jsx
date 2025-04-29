import "./EditProfilInterest.scss"

import { useState } from "react";

import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProfilInterest({handleBackToMain}){

  const [selectedLabels, setSelectedLabels] = useState([]);

  
  const handleLabelChange = (e) => {
    const { value, checked } = e.target;
    const labelId = Number(value);

    if (checked) {
      setSelectedLabels((prev) => [...prev, labelId]);
    } else {
      setSelectedLabels((prev) =>
        prev.filter((item) => item !== labelId)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToUpdate = {};
    if (selectedLabels.length > 0) {
      dataToUpdate.labels = selectedLabels;
    }

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
      <h1 className="border-bottom mb-3 pb-3">Modification centres d'intérêts</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="my-5">
          <Form.Check id="nature" label="Nature" name="labels" value="1" onChange={handleLabelChange} />
          <Form.Check id="culture" label="Culture" name="labels" value="2" onChange={handleLabelChange} />
          <Form.Check id="sport" label="Sports/bien-être" name="labels" value="6" onChange={handleLabelChange} />
          <Form.Check id="soiree-a-theme" label="Soirée à thème" name="labels" value="5" onChange={handleLabelChange} />
          <Form.Check id="artistique" label="Artistique" name="labels" value="3" onChange={handleLabelChange} />
          <Form.Check id="jeux-de-societe" label="Jeux de société" name="labels" value="4" onChange={handleLabelChange} />
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

export default EditProfilInterest;