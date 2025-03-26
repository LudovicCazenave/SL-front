import Container from "react-bootstrap/Container";
import EventCard from "../EventCard/EventCard.jsx";
import ProfilCard from "../ProfilCard/ProfilCard.jsx";
function HomePageConnected(){
  return (
    <section>
      <Container fluid="xl" className="text-center mt-5 px-0">
        <h2 className="bg-primary text-white py-3">Profils selectionnés</h2>
        <ProfilCard />
        
      </Container>
      <Container fluid="xl" className="text-center my-5 bg-secondary px-0">
        <h2 className="bg-primary text-white py-3">Évènements à venir</h2>
        <EventCard />
      </Container>
    </section>
  )
}

export default HomePageConnected;