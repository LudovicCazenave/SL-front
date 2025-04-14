import "./SignIn.scss";

import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { signIn } from "../../api/api.js";
import { validateFormSignin, showErrorMessage } from "../../config/handling.error.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn(){

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);


  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormSignin(formData)) {
      showErrorMessage("Veuillez vérifier que l'email et le mot de passe sont valides.");
      return;
    }

    const user = await signIn(formData);

    if (user) {
      setAuthenticated(true);
      navigate("/tableau-de-bord", { replace: true });
    }
  };


  return(
    <Container className="bg-secondary rounded-4 my-3 py-3 mx-auto size">
      <Form className="text-center" onSubmit={handleSubmit}>
      <Form.Group className="my-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="text" id="email" name="email" placeholder="Votre email..." required autoComplete="username" value={formData.email} onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Mot de passe</Form.Label>
        <Form.Control type="password" id="password" name="password" placeholder="Votre mot de passe..." required autoComplete="new-password" value={formData.password} onChange={handleChange}
        />
      </Form.Group>
      <Button size="lg" type="submit" className="mt-3 w-100">Se connecter</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
