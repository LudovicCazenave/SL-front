import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSlide10({ nextSlide, updateFormData, formData, apiEndpoint }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstname: e.target.firstname.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
      confirmpassword: e.target.confirmpassword.value.trim(),
    };

    if (data.password !== data.confirmpassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    updateFormData(data);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, ...data }),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de l'envoi : ${response.status}`);
      }

      alert("Inscription réussie !");
      nextSlide(); 
    } catch (error) {
      console.error("Erreur :", error.message);
      alert("Une erreur est survenue lors de l'inscription, veuillez réessayer.");
    }
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
        <Form.Label htmlFor="confirmpassword">Vérification de votre mot de passe </Form.Label>
        <Form.Control
          type="password"
          id="confirmpassword"
          name="confirmpassword"
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