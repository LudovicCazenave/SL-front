import Card from 'react-bootstrap/Card';
import Container  from "react-bootstrap/Container";

function ProfilCard(){
  return (
    <Container className='p-4'>
			<a href="#" style={{ textDecoration: "none" }}>
				<Card>
					<Card.Title className='py-3 h1'>Chantal</Card.Title>
					<Card.Img src='/img/diverse-img/profils/Celine.png'/>
					<Card.Body>
						<Card.Text>
							TOULOUSE
						</Card.Text>
					</Card.Body>
				</Card>
			</a>
		</Container>
  );
};

export default ProfilCard;