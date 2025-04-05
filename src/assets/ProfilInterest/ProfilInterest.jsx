import Container from "react-bootstrap/Container";

function ProfilInterest({children}){
  return (
    <Container className="bg-white my-3 py-4 rounded">
      <article>
        <h2 className="mb-5">Centres d'intérets</h2>
        <div>
          <span className="d-inline-block text-white mb-3 bg-secondary py-1 px-2 rounded ">Jeux de socitété</span>
        </div>
        {children}  
      </article>
    </Container>
  );
};

export default ProfilInterest;