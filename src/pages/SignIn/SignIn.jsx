import "./SignIn.scss";

import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { signIn } from "../../api/api.js";
import { validateFormSignin, showErrorMessage } from "../../config/handling.error.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function SignIn() {
  // Local state to hold form field values.
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

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
      setAuthenticated({
        isAuthenticated: true,
          userId: user.id,
          firstname: user.firstname,
      });
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
        <Form.Group className="my-3">
          <Form.Label htmlFor="password">Mot de passe</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Votre mot de passe..."
              required
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputGroup.Text
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
              title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Button size="lg" type="submit" className="mt-3 w-100">
          Se connecter
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
