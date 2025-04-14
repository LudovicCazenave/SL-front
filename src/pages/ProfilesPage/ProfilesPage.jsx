import { useEffect, useState } from "react";

import { getAllProfiles } from "../../api/api.js";

import Container from "react-bootstrap/Container";
import ProfilesFilter from "../../components/ProfilesFilter/ProfilesFilter.jsx";
import ProfilCard from "../../components/ProfilCard/ProfilCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfilesPage(){

  const [profiles, setProfiles] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSmoker, setSelectedSmoker] = useState("");
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedMarital, setSelectedMarital] = useState("");
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  

  useEffect(() =>{
    async function loadProfiles() {
      const data = await getAllProfiles();
      if(data){
        setProfiles(data);
      }
    }
    loadProfiles()
  },[]);

  const filteredProfiles = profiles.filter((profil) => {
  
    const matchCity = selectedCity ? profil.city === selectedCity : true;
    const matchGender = selectedGender ? profil.gender === selectedGender : true;
    
    const matchSmoker= selectedSmoker  ? profil.smoker === selectedSmoker : true;
    const matchPet = selectedPet ? profil.pet === selectedPet : true;
    const matchMarital = selectedMarital ? profil.marital === selectedMarital : true;
    const matchZodiac = selectedZodiac ? profil.zodiac === selectedZodiac : true;

  
    let matchInterests = true;
    if (selectedInterests.length > 0) {
      if (Array.isArray(profil.labels)) {
        matchInterests = selectedInterests.some((interest) =>
          profil.labels.some((label) => label.name === interest)
        );
      } else {
        
        matchInterests = selectedInterests.includes(profil.labels.name);
      }
    }
    
    return (
      matchCity && matchGender && matchSmoker && matchPet && matchMarital && matchZodiac && matchInterests
    );
  });


  return(
    <section>
      <Container fluid="lg" className="bg-secondary my-3 py-3">
        <ProfilesFilter 
          setSelectedCity={setSelectedCity}
          setSelectedGender={setSelectedGender}
          setSelectedSmoker={setSelectedSmoker}
          setSelectedPet={setSelectedPet}
          setSelectedMarital={setSelectedMarital}
          setSelectedZodiac={setSelectedZodiac}
          setSelectedInterests={setSelectedInterests}
        />
        <Row>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profil) => (
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