import Card from 'react-bootstrap/Card';
import Container  from "react-bootstrap/Container";



function EventCard() {
	return (
		<Container className='p-4'>
			<Card>
			<Card.Title className='py-3 h1'>PARIS</Card.Title>
			<Card.Img src='/img/diverse-img/games.jpg'/>
			<Card.Body>
				<Card.Text>
					Partie de Trivial Pursuit au bar à jeux "Les Grands Gamins"
				</Card.Text>
			</Card.Body>
		</Card>
		</Container>
		
	)
}

export default EventCard