import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSlide10({ submitFormData, updateFormData, formData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const dataForm = new FormData(form);

    const data = {
      firstname: dataForm.get("firstname").trim(),
      email: dataForm.get("email").trim(),
      password: dataForm.get("password").trim(),
      confirmPassword: dataForm.get("confirmPassword").trim(),
    };
  
    const mergedData = { ...formData, ...data };

    updateFormData(mergedData);
    console.log(mergedData);
    submitFormData(mergedData);
  };

  return (
    <Form key="form-slide-10" className="text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="firstname">Votre prénom</Form.Label>
        <Form.Control type="text" id="firstname" name="firstname" placeholder="Entrez votre prénom" required />
      </Form.Group>
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
      <Form.Group className="my-3">
        <Form.Label htmlFor="password">Votre mot de passe</Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          placeholder="Entrez un mot de passe sécurisé"
          required
          autoComplete="new-password"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="confirmPassword">Vérification de votre mot de passe </Form.Label>
        <Form.Control
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmez votre mot de passe"
          required
          autoComplete="new-password"
        />
      </Form.Group>
      <Button size="lg" type="submit" className="my-3">Valider</Button>
    </Form>
  );
}

export default FormSlide10;