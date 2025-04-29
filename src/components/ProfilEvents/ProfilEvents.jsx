
import Container from "react-bootstrap/Container";

import EventCard from "../EventCard/EventCard.jsx";

function ProfilEvents({ profil }){

  if (!profil) {
    return <Container><p>Données du profil indisponibles.</p></Container>;
  }


  return(
    <article>
      <Container className="px-0 my-3 bg-secondary rounded d-flex flex-column flex-lg-row gap-2">
        <Container fluid="lg" className="text-center px-0">
          <h2 className="bg-primary text-white py-3 rounded">Evènement passés</h2>
          {profil.pastEvents && profil.pastEvents.length > 0 ? (
            profil.pastEvents.map((event) =>(
              <EventCard key={event.id} event={event}/>
            ))
          ) : (
            <p>Aucun évènement passés</p>
          )}  
        </Container>
        <Container fluid="lg" className="text-center px-0">
          <h2 className="bg-primary text-white py-3 rounded">Evènement à venir</h2>
          {profil.futureEvents &&profil.futureEvents.length > 0 ? (
            profil.futureEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
            
          ) : (
            <p>Aucun évènement à venir</p>
          )}

        </Container>
      </Container>
      
    </article>
  );
};

export default ProfilEvents;