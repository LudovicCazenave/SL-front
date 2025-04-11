import Container from "react-bootstrap/Container";

function ProfilInfo({children, profil}) {

  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }

  return (
    <Container
      className="bg-warning text-white my-3 py-4 rounded flex-grow-1"
      style={{ height: "100%" }}
    >
      <article>
        <h2 className="mb-5">Informations générales</h2>
        <div>
          <p><strong>Taille :</strong> <span>{profil.height} </span>cm</p>
          <p><strong>Fumeur/Fumeuse :</strong> <span>{profil.smoker}</span></p>
          <p><strong>Situation familiale :</strong> <span>{profil.marital}</span></p>
          <p><strong>Signe astrologique :</strong> <span>{profil.zodiac}</span></p>
          <p><strong>Animaux de compagnie :</strong> <span>{profil.pet}</span></p>
          <p><strong>Style de musique :</strong> <span>{profil.music}</span></p>
        </div>
        <div className="d-flex gap-4">
          {children}
        </div>
      </article>
    </Container>
  );
}

export default ProfilInfo;
