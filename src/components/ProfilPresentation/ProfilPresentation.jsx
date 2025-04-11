import Container from "react-bootstrap/Container";

function ProfilPresentation({children, profil}){

  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }

  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        <h2 className="mb-5">Texte d'introduction</h2>
        <p>{profil.description}</p>
        {children}
      </article>
    </Container>
  );
};

export default ProfilPresentation;