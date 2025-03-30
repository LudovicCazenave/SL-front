import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn(){
  return(
    <Container className="bg-secondary rounded-4 my-5 py-3 mx-auto" style={{ maxWidth: "400px" }}>
      <Form className="text-center">
      <Form.Group className="my-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="text" id="email" name="email" placeholder="Votre email..." required autoComplete="username" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Mot de passe</Form.Label>
        <Form.Control type="password" id="password" name="password" placeholder="Votre mot de passe..." required autoComplete="new-password" />
      </Form.Group>
      <Button size="lg" type="submit" className="my-3 w-100">Se connecter</Button>
      </Form>
    </Container>
  );
};
export default SignIn;
