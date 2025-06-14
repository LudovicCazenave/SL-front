import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function FormSlide10({ submitFormData, updateFormData, formData }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle the form submission event
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object from the current form element
    const form = e.currentTarget;
    const dataForm = new FormData(form);

    // Retrieve and trim values from the form inputs
    const data = {
      firstname: dataForm.get("firstname").trim(),
      email: dataForm.get("email").trim(),
      password: dataForm.get("password").trim(),
      confirmPassword: dataForm.get("confirmPassword").trim(),
    };

    // Merge the new data with any existing form data
    const mergedData = { ...formData, ...data };

    updateFormData(mergedData); // Update the parent component's form data
    submitFormData(mergedData); // Submit the final form data
  };

  return (
    <Form key="form-slide-10" className="text-center" onSubmit={handleSubmit}>
      {/* Input field for first name */}
      <Form.Group>
        <Form.Label htmlFor="firstname">Votre prénom</Form.Label>
        <Form.Control
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Entrez votre prénom"
          required
        />
      </Form.Group>
      {/* Input field for email */}
      <Form.Group className="my-3">
        <Form.Label htmlFor="email">Votre email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre email"
          required
          autoComplete="username"
        />
      </Form.Group>
      {/* Input field for password */}
      <Form.Group className="my-3">
        <Form.Label htmlFor="password">Votre mot de passe</Form.Label>
        <InputGroup>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-password">
              Le mot de passe doit avoir **minimum 8 caractères, 1 majuscule et un caractère spécial**.
            </Tooltip>
          }
        >
          <Form.Control
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Entrez un mot de passe sécurisé"
            required
            autoComplete="new-password"
          />
        </OverlayTrigger>

          <InputGroup.Text
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
            title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      {/* Input field for confirming password */}
      <Form.Group className="my-3">
        <Form.Label htmlFor="confirmPassword">Vérification de votre mot de passe</Form.Label>
        <InputGroup>
          <Form.Control
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            required
            autoComplete="new-password"
          />
          <InputGroup.Text
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{ cursor: "pointer" }}
            title={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      {/* Button to submit the form */}
      <Button size="lg" type="submit" className="my-3">
        Valider
      </Button>
    </Form>
  );
}

export default FormSlide10;
