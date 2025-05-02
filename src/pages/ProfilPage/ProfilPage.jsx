import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { getOneProfil } from "../../api/api.js";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import ProfilEvents from "../../components/ProfilEvents/ProfilEvents.jsx";
import ProfilInfo from "../../components/ProfilInfo/ProfilInfo.jsx";
import ProfilInterest from "../../components/ProfilInterest/ProfilInterest.jsx";
import ProfilPresentation from "../../components/ProfilPresentation/ProfilPresentation.jsx";
import ProfilSection from "../../components/ProfilSection/ProfilSection.jsx";

function ProfilPage() {
  // Retrieve the profile slug from the react-router parameters.
  const { slug } = useParams();
  // Local state to store the fetched profile details.
  const [profil, setProfil] = useState(null);
  // Hook to navigate programmatically.
  const navigate = useNavigate();

  // When the slug changes, fetch profile data from the API.
  useEffect(() => {
    async function loadProfil() {
      const data = await getOneProfil(slug);
      if (data) {
        setProfil(data);
      }
    }
    loadProfil();
  }, [slug]);

  // Function to handle sending a message. It navigates to the /messages route,
  // passing the current profile as the receiver in navigation state.
  const handleSendMessage = () => {
    if (profil) {
      navigate("/messages", { state: { receiver: profil } });
    } else {
      console.error("Profil non chargé, impossible d'envoyer un message");
    }
  };

  return (
    <>
      {/* Section showing the profile header with image and basic info */}
      <section>
        <ProfilSection profil={profil} />
      </section>

      {/* Section containing detailed information, events, and message interactions */}
      <section>
        <Container fluid="lg" className="px-0" style={{ overflowX: "hidden" }}>
          <Row className="d-flex flex-column flex-lg-row-reverse mb-3">
            {/* Left column on large screens: Profile general info */}
            <Col lg="4" className="d-flex flex-column">
              <ProfilInfo profil={profil} />
            </Col>
            {/* Right column: Presentation text, interests, and associated events */}
            <Col>
              <ProfilPresentation profil={profil} />
              <ProfilInterest profil={profil} />
              <ProfilEvents profil={profil} />
            </Col>
            {/* Button container to send a message to the displayed profile */}
            <Container fluid className="text-center">
              <Button size="lg" variant="warning" onClick={handleSendMessage}>
                Envoyer un message
              </Button>
            </Container>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProfilPage;