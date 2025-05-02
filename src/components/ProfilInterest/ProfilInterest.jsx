import Container from "react-bootstrap/Container";

function ProfilInterest({ children, profil }) {
  // If profile data is missing, display an error message
  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }

  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        {/* Section title for interests */}
        <h2 className="mb-5">Centres d'intérets</h2>
        <div>
          {/* If there are labels, map and display each one; otherwise, show a message */}
          {profil.labels && profil.labels.length > 0 ? (
            profil.labels.map((label) => (
              <span key={label.id} className="d-inline-block text-white mb-3 bg-secondary py-1 px-2 mx-2 rounded">
                {label.name}
              </span>
            ))
          ) : (
            <p>Aucun centre d'intérets pour le moment</p>
          )}
        </div>
        {/* Render any extra content passed as children */}
        {children}
      </article>
    </Container>
  );
};

export default ProfilInterest;