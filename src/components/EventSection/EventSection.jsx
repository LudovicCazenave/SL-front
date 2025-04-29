import "./EventSection.scss";

import { formatDate, formatHour } from "../../utils/format.js";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function EventSection({ children, event }){

  if(!event) {
    return <Container><p>Données de l'évènement indisponibles.</p></Container>;
  };

  return(
    <Container className="text-center bg-white my-3 py-4 rounded">
      <article>
        <Image src="/src/assets/img/diverse-img/games.jpg" alt="image de l'événement"  width="400" height="250" className="rounded img"/>
        <div className="my-4">
          <p><strong>Date :</strong> <span>{formatDate(event.date)}</span></p>
          <p><strong>Horaire :</strong> <span>{formatHour(event.time)}h</span></p>
          <p><strong>Thème :</strong> <span>{event.label.name}</span></p>
          <p><strong>Lieu :</strong> <span>{event.city}</span></p>
          <p><strong>Nombre de participants :</strong> <span>{event.users.length}</span></p>
        </div>
        {children}
      </article>
    </Container>
  );
};

export default EventSection;