import ProfilEvents from "../ProfilEvents/ProfilEvents.jsx";
import ProfilInfo from "../ProfilInfo/ProfilInfo.jsx";
import ProfilInterest from "../ProfilInterest/ProfilInterest.jsx";
import ProfilPresentation from "../ProfilPresentation/ProfilPresentation.jsx";
import ProfilSection from "../ProfilSection/ProfilSection.jsx";
import EditProfilSection from "../EditProfilSection/EditProfilSection.jsx";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import EditProfilPresentation from "../EditProfilPresentation/EditProfilPresentation.jsx";
import EditProfilInfo from "../EditProfilInfo/EditProfilInfo.jsx";
import EditProfilInterest from "../EditProfilInterest/EditProfilInterest.jsx";

import { useState } from "react";

function MyAccountPage(){

  const [currentView, SetCurrentView] = useState("main");

  const handleEditView = (view) => {
    SetCurrentView(view);
  }

  const handleBackToMain = () =>{
    SetCurrentView("main")
  }

  return(
  <>
    {currentView === "main" && (
      <>
        <section>
          <ProfilSection>
            <Button size="lg" onClick={() => handleEditView("editProfilSection")}>
              Modifier
            </Button>
          </ProfilSection>
        </section>
        <section>
          <Container fluid="lg" className="px-0" style={{ overflowX: "hidden" }}>
            <Row className="d-flex flex-column flex-lg-row-reverse">
              <Col lg="4" className="d-flex flex-column">
                <ProfilInfo>
                  <Button size="lg" onClick={() => handleEditView("editProfilInfo")}>
                    Modifier
                  </Button>
                  <Button variant="danger" size="lg">Supprimer le compte</Button>
                </ProfilInfo>
              </Col>
              <Col>
                <ProfilPresentation>
                  <Button size="lg" onClick={() => handleEditView("editProfilPresentation")}>
                    Modifier
                  </Button>  
                </ProfilPresentation>
                <ProfilInterest>
                  <Button  size="lg" onClick={() => handleEditView("editProfilInterest")}>
                    Modifier
                  </Button>  
                </ProfilInterest>
                <ProfilEvents />
              </Col>
            </Row>
          </Container>
        </section>
      </> 
    )}

    {currentView === "editProfilSection" && (
      <EditProfilSection handleBackToMain={handleBackToMain} />
    )}

    {currentView === "editProfilInfo" && (
      <EditProfilInfo handleBackToMain={handleBackToMain} />
    )}

    {currentView === "editProfilPresentation" && (
      <EditProfilPresentation handleBackToMain={handleBackToMain} />
    )}

    {currentView === "editProfilInterest" && (
      <EditProfilInterest handleBackToMain={handleBackToMain} />
    )}
  </>
  );
};

export default MyAccountPage;