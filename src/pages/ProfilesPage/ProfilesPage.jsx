import { useEffect, useState } from "react";

import { getAllProfiles } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import ProfilesFilter from "../../components/ProfilesFilter/ProfilesFilter.jsx";
import ProfilCard from "../../components/ProfilCard/ProfilCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfilesPage(){

  const [profiles, setProfiles] = useState([]);

  useEffect(() =>{
    async function loadProfiles() {
      const data = await getAllProfiles();
      if(data){
        setProfiles(data);
      }
    }
    loadProfiles()
  },[]);

  return(
    <section>
      <Container fluid="lg" className="bg-secondary my-3 py-3">
        <ProfilesFilter />
        <Row>
          {profiles.length > 0 ? (
            profiles.map((profil) => (
              <Col key={profil.id} xs={12} md={6} xl={4}>
                <ProfilCard profil={profil}/>
              </Col>
            ))
          ) : (
            <p>Aucun profil à afficher</p>
          )}
        </Row>
      </Container>
    </section>
  );
};


export default ProfilesPage;