import EventCard from "../EventCard/EventCard.jsx"
import Container  from "react-bootstrap/Container";

function Events() {
  return (
    <section>
      <Container fluid="xl" className="text-center mt-5 bg-secondary px-0">
        <h2 className="bg-primary text-white py-3">Nos derniers événements</h2>
        <EventCard />
      </Container>
    </section>
  )
}

export default Events