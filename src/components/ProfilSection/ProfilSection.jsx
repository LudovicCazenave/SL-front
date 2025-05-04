import "./ProfilSection.scss";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function ProfilSection({ children, profil }) {
  
  // Check if profile data is available; if not, return an error message
  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }

  // If the profile picture URL is the default invalid value, reset it to an empty string
  if (profil.picture === "http://localhost:3000/null") {
    profil.picture = "";
  }

  // Access the API URL from .env
  const apiUrl = process.env.REACT_APP_API_URL;

  // Choose the default image based on the profile's gender
  const defaultImage =
    profil.gender === "Femme"
      ? "/assets/img/diverse-img/profils/celine.png"
      : "/assets/img/diverse-img/profils/jacky.jpg";

  // Construct the full profile image URL if it exists
  const imageUrl = profil.picture 
    ? `${apiUrl}/public/${profil.picture}`
    : defaultImage;

  return (
    <Container className="text-center bg-white my-3 py-4 rounded">
      <article>
        {/* Render the profile image; falls back to the default image if none provided */}
        <Image
          src={imageUrl}
          alt={profil.firstname}
          roundedCircle
          width="250"
          height="250"
          className="border border-3 border-primary img"
        />
        <div className="my-4">
          <p><strong>Prénom :</strong> <span>{profil.firstname}</span></p>
          <p><strong>Age :</strong> <span>{profil.age} ans</span></p>
          <p><strong>Ville :</strong> <span>{profil.city}</span></p>
        </div>
        {/* Render any additional content passed as children */}
        {children}
      </article>
    </Container>
  );
};

export default ProfilSection;