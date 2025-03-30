import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProfilInfo() {
  return (
    <Container
      className="bg-warning text-white my-3 py-4 rounded flex-grow-1"
      style={{ height: "100%" }}
    >
      <article>
        <h2 className="mb-5">Informations générales</h2>
        <div>
          <p><strong>Taille :</strong> <span>170</span>cm</p>
          <p><strong>Fumeur/Fumeuse :</strong> <span>oui</span></p>
          <p><strong>Situation familiale :</strong> <span>Célibataire</span></p>
          <p><strong>Signe astrologique :</strong> <span>Gémeaux</span></p>
          <p><strong>Animaux de compagnie :</strong> <span>oui</span></p>
          <p><strong>Style de musique :</strong> <span>Rock</span></p>
        </div>
        <div className="d-flex gap-4">
          <Button size="lg">Modifier</Button>
          <Button variant="danger" size="lg">Supprimer le compte</Button>
        </div>
      </article>
    </Container>
  );
}

export default ProfilInfo;
