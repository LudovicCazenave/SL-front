import "./ProfilCard.scss";

import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

function ProfilCard({
  profil = {
    firstname: "Baptiste",
    city: "Paris",
    slug: "baptiste",
    age: "64"
  }
}) {
  const navigate = useNavigate(); // Set up navigation

  // Navigate to the detailed profile page when the card is clicked
  const handleClick = () => {
    navigate(`/profils/${profil.slug}`);
  };

  // Choose the default image based on the profile's gender
  const defaultImage =
    profil.gender === "Femme"
      ? "/src/assets/img/diverse-img/profils/celine.png"
      : "/src/assets/img/diverse-img/profils/jacky.jpg";

  return (
    <Container fluid="lg" className="p-4 text-center">
      <Card
        className="clickable-card"
        aria-label={`Voir le profil de ${profil.firstname}`}
        onClick={handleClick}
      >
        <Card.Title className="py-3 h1">{profil.firstname}</Card.Title>
        <div className="relative">
          <Card.Img src={defaultImage} alt={`Photo de ${profil.firstname}`} />
          <span className="bg-primary text-white rounded p-1 absolute">
            {profil.age} ans
          </span>
        </div>
        <Card.Body>
          <Card.Text>{profil.city}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfilCard;