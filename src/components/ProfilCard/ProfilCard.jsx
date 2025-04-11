import { useNavigate } from 'react-router';

import Card from 'react-bootstrap/Card';
import Container  from "react-bootstrap/Container";

function ProfilCard({ 
	profil={
		firstname : "Baptiste",
		city : "Paris"
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
					<Card.Img src='/src/assets/img/diverse-img/profils/Celine.png'/>
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