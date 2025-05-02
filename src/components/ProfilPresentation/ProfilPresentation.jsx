import Container from "react-bootstrap/Container";

function ProfilPresentation({ children, profil }) {
  // If no profile data is provided, display an error message
  if (!profil) {
    return (
      <Container>
        <p>Données du profil indisponibles.</p>
      </Container>
    );
  }

  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        {/* Section title for the introduction text */}
        <h2 className="mb-5">Texte d'introduction</h2>
        {/* Display the profile's description */}
        <p>{profil.description}</p>
        {/* Render any additional content passed as children */}
        {children}
      </article>
    </Container>
  );
};

export default ProfilPresentation;