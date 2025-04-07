import "./ProfilSection.scss"

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function ProfilSection({children}){

  return(
    <Container className="text-center bg-white my-3 py-4 rounded">
      <article>
        <Image src="/src/assets/img/diverse-img/profils/Celine.png" alt="" roundedCircle width="250" height="250" className="border border-3 border-primary img"/>
        <div className="my-4">
          <p><strong>Prénom :</strong> <span>Celine</span></p>
          <p><strong>Age :</strong> <span>60 ans</span></p>
          <p><strong>Ville :</strong> <span>Bordeaux</span></p>
        </div>
        {children}
      </article>
      
    </Container>
  );
};

export default ProfilSection;