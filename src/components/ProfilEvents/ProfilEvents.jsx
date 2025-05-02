import Container from "react-bootstrap/Container";
import EventCard from "../EventCard/EventCard.jsx";

function ProfilEvents({ profil }) {
  // If the profil data is missing, display an error message
  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }

  return (
    <article>
      {/* Main container wrapping past and future events */}
      <Container className="px-0 my-3 bg-secondary rounded d-flex flex-column flex-lg-row gap-2">
        {/* Container for past events */}
        <Container fluid="lg" className="text-center px-0">
          <h2 className="bg-primary text-white py-3 rounded">Evènement passés</h2>
          {profil.pastEvents && profil.pastEvents.length > 0 ? (
            // Render an EventCard for each past event
            profil.pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            // Display a message if there are no past events
            <p>Aucun évènement passés</p>
          )}
        </Container>
        {/* Container for future events */}
        <Container fluid="lg" className="text-center px-0">
          <h2 className="bg-primary text-white py-3 rounded">Evènement à venir</h2>
          {profil.futureEvents && profil.futureEvents.length > 0 ? (
            // Render an EventCard for each future event
            profil.futureEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            // Display a message if there are no upcoming events
            <p>Aucun évènement à venir</p>
          )}
        </Container>
      </Container>
    </article>
  );
}

export default ProfilEvents;