import "./ProfilSection.scss";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function ProfilSection({children, profil}){

  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  };

  return(
    <Container className="text-center bg-white my-3 py-4 rounded">
      <article>
        <Image src="/src/assets/img/diverse-img/profils/Celine.png" alt="" roundedCircle width="250" height="250" className="border border-3 border-primary img"/>
        <div className="my-4">
          <p><strong>Prénom :</strong> <span>{profil.firstname}</span></p>
          <p><strong>Age :</strong> <span>{profil.age} ans</span></p>
          <p><strong>Ville :</strong> <span>{profil.city}</span></p>
        </div>
        {children}
      </article>
      
    </Container>
  );
};

export default ProfilSection;