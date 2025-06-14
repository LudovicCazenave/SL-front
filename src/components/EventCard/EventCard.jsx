import "./EventCard.scss"; 

import { useNavigate } from "react-router"; 

import Card from "react-bootstrap/Card"; 
import Container from "react-bootstrap/Container"; 

// EventCard component receives an event object as a prop with default values.
function EventCard({
  event = {
    city: "Paris",
    description: "blabla",
    slug: "evenement-paris",
    label: { name: "label" },
  },
  isClickable = true,
}) {
  const navigate = useNavigate();

  // Handle click event to navigate to the event detail page using the event.slug
  const handleClick = () => {
    if(isClickable){
      navigate(`/evenements/${event.slug}`);
    }
  };

  return (
    // Container with padding and centered text
    <Container fluid="lg" className="p-4 text-center">
      {/* Clickable card with an aria-label for accessibility */}
      <Card
        className={isClickable ? "clickable-card" : ""}
        aria-label={`Voir la fiche de l'événement ${event.description}`}
        onClick={handleClick}
      >
        {/* Card title showing the city of the event */}
        <Card.Title className="py-3 h1">{event.city}</Card.Title>
        <div className="relative">
          {/* Event image with a placeholder picture */}
          <Card.Img
            src="/assets/img/diverse-img/games.jpg"
            alt="Image de l'événement"
          />
          {/* Label displayed on top of the image */}
          <span className="bg-primary text-white rounded p-1 absolute">
            {event.label.name}
          </span>
        </div>
        <Card.Body>
          {/* Event description */}
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EventCard;