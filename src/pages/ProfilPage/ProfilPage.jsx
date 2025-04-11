import {useEffect, useState } from "react";
import { useParams } from "react-router";

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


function ProfilPage(){

  const { slug } = useParams();
  const [profil, setProfil] = useState(null);

  useEffect(() => {
   
    async function loadProfil(){
      const data = await getOneProfil(slug);
      if (data) {
        setProfil(data);
      }
    };
    loadProfil();
  }, [slug]);

  return(
    <>
      <section>
        <ProfilSection profil={profil}>
        </ProfilSection>
      </section>
      <section>
      <Container fluid="lg" className="px-0" style={{ overflowX: "hidden" }}>
          <Row className="d-flex flex-column flex-lg-row-reverse mb-3">
            <Col lg="4" className="d-flex flex-column">
              <ProfilInfo profil={profil}>
              </ProfilInfo>
            </Col>
            <Col>
              <ProfilPresentation profil={profil}>
              </ProfilPresentation>
              <ProfilInterest profil={profil}>
              </ProfilInterest>
              <ProfilEvents profil={profil}/>
            </Col>
              <Container fluid className="text-center">
                <Button  size="lg" variant="warning">
                  Envoyer un message
                </Button>
              </Container>  
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProfilPage;