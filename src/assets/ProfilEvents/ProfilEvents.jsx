
import Container from "react-bootstrap/Container";

import EventCard from "../EventCard/EventCard.jsx";

function ProfilEvents(){

  return(
    <article>
      <Container className="px-0 my-3 bg-secondary rounded d-flex flex-column flex-lg-row gap-2">
        <Container fluid="lg" className="text-center px-0">
          <h2 className="bg-primary text-white py-3 rounded">Evènement passés</h2>
          <EventCard />
        </Container>
        <Container fluid="lg" className="text-center px-0">
          <h2 className="bg-primary text-white py-3 rounded">Evènement à venir</h2>
          <EventCard />
        </Container>
      </Container>
      
    </article>
  );
};

export default ProfilEvents;