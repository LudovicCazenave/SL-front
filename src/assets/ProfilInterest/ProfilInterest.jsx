import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProfilInterest(){
  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        <h2 className="mb-5">Centres d'intérets</h2>
        <div>
          <span className="d-inline-block text-white mb-3 bg-secondary py-1 px-2 rounded ">Jeux de socitété</span>
        </div>
        <Button size="lg">Modifier</Button>  
      </article>
    </Container>
  );
};

export default ProfilInterest;