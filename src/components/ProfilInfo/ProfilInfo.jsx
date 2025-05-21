import "./ProfilInfo.scss";

import Container from "react-bootstrap/Container";

function ProfilInfo({ children, profil }) {
  // Check if the profile data is provided; if not, display an error message.
  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }

  return (
    <Container className="bg-warning text-white my-4 py-3 rounded flex-grow-1 size-format">
      <article>
        {/* Section title for general information */}
        <h2 className="mb-5">Informations générales</h2>
        <div>
          {/* Display profile attributes */}
          <p><strong>Taille :</strong> <span>{profil.height} </span>cm</p>
          <p><strong>Fumeur/Fumeuse :</strong> <span>{profil.smoker}</span></p>
          <p><strong>Situation familiale :</strong> <span>{profil.marital}</span></p>
          <p><strong>Signe astrologique :</strong> <span>{profil.zodiac}</span></p>
          <p><strong>Animaux de compagnie :</strong> <span>{profil.pet}</span></p>
          <p><strong>Style de musique :</strong> <span>{profil.music}</span></p>
        </div>
        {/* Render any additional elements passed as children */}
        <div className="d-flex gap-4">
          {children}
        </div>
      </article>
    </Container>
  );
};

export default ProfilInfo;
