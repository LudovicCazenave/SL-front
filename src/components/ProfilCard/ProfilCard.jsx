import "./ProfilCard.scss"

import { useNavigate } from 'react-router';

import Card from 'react-bootstrap/Card';
import Container  from "react-bootstrap/Container";

function ProfilCard({ 
	profil={
		firstname : "Baptiste",
		city : "Paris",
		slug : "baptiste",
		age: "64"
	} 
}){

	const navigate = useNavigate();

	const handleClick = () => {
    navigate(`/profils/${profil.slug}`);
  };

	
  return (
    <Container fluid="lg" className='p-4 text-center'>
			<a href="#" style={{ textDecoration: "none" }}>
				<Card onClick={handleClick} >
					<Card.Title className='py-3 h1'>{profil.firstname}</Card.Title>
					<div className="relative">
          <Card.Img src="/src/assets/img/diverse-img/profils/Celine.png" />
          <span className="bg-primary text-white rounded p-1 absolute" >
          	{profil.age} ans
          </span>
        </div>

					<Card.Body>
						<Card.Text>
							{profil.city}
						</Card.Text>
					</Card.Body>
				</Card>
			</a>
		</Container>
  );
};

export default ProfilCard;