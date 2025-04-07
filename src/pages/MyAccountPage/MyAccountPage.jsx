import { useNavigate, useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import ProfilEvents from "../../components/ProfilEvents/ProfilEvents.jsx";
import ProfilInfo from "../../components/ProfilInfo/ProfilInfo.jsx";
import ProfilInterest from "../../components/ProfilInterest/ProfilInterest.jsx";
import ProfilPresentation from "../../components/ProfilPresentation/ProfilPresentation.jsx";
import ProfilSection from "../../components/ProfilSection/ProfilSection.jsx";
import EditProfilSection from "../../components/EditProfilSection/EditProfilSection.jsx";
import EditProfilPresentation from "../../components/EditProfilPresentation/EditProfilPresentation.jsx";
import EditProfilInfo from "../../components/EditProfilInfo/EditProfilInfo.jsx";
import EditProfilInterest from "../../components/EditProfilInterest/EditProfilInterest.jsx";

function MyAccountPage() {

  const navigate = useNavigate();
  const { editView } = useParams();

  const handleEditView = (view) => {
    navigate(`/mon-compte/modification/${view}`, { replace: true });
  };

  const handleBackToMain = () => {
    navigate("/mon-compte", { replace: true });
  };

  if (editView) {
    switch (editView) {
      case "identite":
        return <EditProfilSection handleBackToMain={handleBackToMain} />;
      case "generale":
        return <EditProfilInfo handleBackToMain={handleBackToMain} />;
      case "texte-introduction":
        return <EditProfilPresentation handleBackToMain={handleBackToMain} />;
      case "centre-interet":
        return <EditProfilInterest handleBackToMain={handleBackToMain} />;
      default:
        return <div>La modification demandée n'existe pas.</div>;
    }
  }

  
  return (
    <>
      <section>
        <ProfilSection>
          <Button size="lg" onClick={() => handleEditView("identite")}>
            Modifier
          </Button>
        </ProfilSection>
      </section>
      <section>
        <Container fluid="lg" className="px-0" style={{ overflowX: "hidden" }}>
          <Row className="d-flex flex-column flex-lg-row-reverse">
            <Col lg="4" className="d-flex flex-column">
              <ProfilInfo>
                <Button size="lg" onClick={() => handleEditView("generale")}>
                  Modifier
                </Button>
                <Button variant="danger" size="lg">
                  Supprimer le compte
                </Button>
              </ProfilInfo>
            </Col>
            <Col>
              <ProfilPresentation>
                <Button size="lg" onClick={() => handleEditView("texte-introduction")}>
                  Modifier
                </Button>
              </ProfilPresentation>
              <ProfilInterest>
                <Button size="lg" onClick={() => handleEditView("centre-interet")}>
                  Modifier
                </Button>
              </ProfilInterest>
              <ProfilEvents />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MyAccountPage;