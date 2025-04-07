import Container from "react-bootstrap/Container";

function ProfilPresentation({children}){
  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        <h2 className="mb-5">Texte d'introduction</h2>
        <p>Jeune retraitée et cherche à faire des rencontres. Contactez-moi!</p>
        {children}
      </article>
    </Container>
  );
};

export default ProfilPresentation;