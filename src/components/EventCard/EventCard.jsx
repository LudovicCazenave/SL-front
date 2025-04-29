import "./EventCard.scss"

import { useNavigate } from 'react-router';

import Card from 'react-bootstrap/Card';
import Container  from "react-bootstrap/Container";

function EventCard({ 
	event={
		city : "Paris",
		description : "blabla",
		slug: "evenement-paris",
		label :{name: "label"}
	} 
}) {

	const navigate = useNavigate();

	const handleClick = () => {
    navigate(`/evenements/${event.slug}`);
  };

	return (
		<Container fluid="lg" className='p-4 text-center' >
				<Card className="clickable-card" aria-label={`Voir la fiche  de l'événement ${event.description}`} onClick={handleClick} >
					<Card.Title className='py-3 h1'>{event.city}</Card.Title>
					<div className="relative">
					<Card.Img src='/src/assets/img/diverse-img/games.jpg' alt="Image de l'événement"/>
					<span className='bg-primary text-white rounded p-1  absolute'>
						{event.label.name}
					</span>
					</div>
					
					<Card.Body>
						<Card.Text>
							{event.description}
						</Card.Text>
					</Card.Body>
				</Card>	
		</Container>
	);
};

export default EventCard;