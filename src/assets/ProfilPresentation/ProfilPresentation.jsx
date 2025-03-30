import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProfilPresentation(){
  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        <h2 className="mb-5">Texte d'introduction</h2>
        <p>Jeune retraitée et cherche à faire des rencontres. Contactez-moi!</p>
        <Button  size="lg">Modifier</Button>  
      </article>
    </Container>
  );
};

export default ProfilPresentation;