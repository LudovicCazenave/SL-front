import "./EventSection.scss"; 

import { formatDate, formatHour } from "../../utils/format.js";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// Component to display key details about an event
function EventSection({ children, event }) {
  // If no event data is provided, display a fallback message
  if (!event) {
    return (
      <Container>
        <p>Données de l'évènement indisponibles.</p>
      </Container>
    );
  }

  return (
    <Container className="text-center bg-white my-3 py-4 rounded">
      <article>
        {/* Display a placeholder event image */}
        <Image
          src="/src/assets/img/diverse-img/games.jpg"
          alt="Image de l'événement"
          width="400"
          height="250"
          className="rounded img"
        />
        <div className="my-4">
          {/* Display the formatted event date */}
          <p>
            <strong>Date :</strong> <span>{formatDate(event.date)}</span>
          </p>
          {/* Display the formatted event time with a trailing 'h' */}
          <p>
            <strong>Horaire :</strong> <span>{formatHour(event.time)}h</span>
          </p>
          {/* Display the event theme from the event label */}
          <p>
            <strong>Thème :</strong> <span>{event.label.name}</span>
          </p>
          {/* Display the event location (city) */}
          <p>
            <strong>Lieu :</strong> <span>{event.city}</span>
          </p>
          {/* Display the number of participants in the event */}
          <p>
            <strong>Nombre de participants :</strong> <span>{event.users.length}</span>
          </p>
        </div>
        {/* Render any additional content passed as children */}
        {children}
      </article>
    </Container>
  );
}

export default EventSection;