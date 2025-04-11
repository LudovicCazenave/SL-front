import Card from 'react-bootstrap/Card';
import Container  from "react-bootstrap/Container";

function EventCard({ 
	event={
		city : "Paris",
		description : "blabla"
	} 
}) {

	return (
		<Container fluid="lg" className='p-4 text-center'>
			<a href="#" style={{ textDecoration: "none" }}>
				<Card>
					<Card.Title className='py-3 h1'>{event.city}</Card.Title>
					<Card.Img src='/src/assets/img/diverse-img/games.jpg'/>
					<Card.Body>
						<Card.Text>
							{event.description}
						</Card.Text>
					</Card.Body>
				</Card>
			</a>
		</Container>
	);
};

export default EventCard;