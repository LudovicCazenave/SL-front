import "./SignIn.scss";

import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { signIn } from "../../api/api.js";
import { validateFormSignin, showErrorMessage } from "../../config/handling.error.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn() {
  // Local state to hold form field values.
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Navigate allows programmatic route changes.
  const navigate = useNavigate();
  // AuthContext provides a method to update the authentication state.
  const { setAuthenticated } = useContext(AuthContext);

  // Update local form state when a field value changes.
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission: validate, sign in and update global auth state.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the formData. If invalid, display an error.
    if (!validateFormSignin(formData)) {
      showErrorMessage("Veuillez vérifier que l'email et le mot de passe sont valides.");
      return;
    }

    // Attempt to sign in using the API with the provided credentials.
    const user = await signIn(formData);

    if (user) {
      // If sign-in is successful, update the global auth state.
      setAuthenticated(true);
      // Redirect to the dashboard.
      navigate("/tableau-de-bord", { replace: true });
    }
  };

  return (
    <Container className="bg-secondary rounded-4 my-3 py-3 mx-auto size">
      <Form className="text-center" onSubmit={handleSubmit}>
        <Form.Group className="my-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            id="email"
            name="email"
            placeholder="Votre email..."
            required
            autoComplete="username"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Mot de passe</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Votre mot de passe..."
            required
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button size="lg" type="submit" className="mt-3 w-100">
          Se connecter
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
