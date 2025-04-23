import { useState } from "react";

import { editMyAccount } from "../../api/api.js";
import { successProfileUpdate, showErrorMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function EditProfilSection({handleBackToMain}){

  const [formData, setFormData] = useState({
    picture: null,
    firstname: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture" && files.length > 0) {
      // Stocke le fichier sélectionné ; à adapter si vous devez le convertir en base64
      setFormData((prev) => ({ ...prev, picture: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Gestion de la soumission du formulaire.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construire l'objet à envoyer en filtrant les champs non renseignés.
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
      <h1 className="border-bottom mb-3 pb-3">Modification Identité</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-picture">Télécharger une photo de profil</Form.Label>
          <Form.Control type="file" id="edit-picture" name="picture" accept="image/*" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Label htmlFor="edit-firstname">Prénom</Form.Label>
          <Form.Control type="text" id="edit-firstname" name="firstname" placeholder="Entrez votre nouveau prénom" onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label htmlFor='city'> Ville</Form.Label>
          <Form.Select  id='city' className='focus-primary' name='city' required defaultValue="Votre ville" onChange={handleChange} >
            <option value="">Votre ville</option>
            <option value="PARIS">Paris</option>
            <option value="LYON">Lyon</option>
            <option value="TOULOUSE">Toulouse</option>
            <option value="MARSEILLE">Marseille</option>
          </Form.Select>
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
export default EditProfilSection;