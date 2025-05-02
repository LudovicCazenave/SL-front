import { useEffect, useState } from "react";

import { getAllProfiles } from "../../api/api.js";

import ProfilesFilter from "../../components/ProfilesFilter/ProfilesFilter.jsx";
import ProfilCard from "../../components/ProfilCard/ProfilCard.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfilesPage() {
  // State for storing all profiles retrieved from the API.
  const [profiles, setProfiles] = useState([]);
  // States to store the selected filters.
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSmoker, setSelectedSmoker] = useState("");
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedMarital, setSelectedMarital] = useState("");
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Fetch profiles when the component mounts.
  useEffect(() => {
    async function loadProfiles() {
      const data = await getAllProfiles();
      if (data) {
        setProfiles(data);
      }
    }
    loadProfiles();
  }, []);

  // Filter profiles based on selected filters.
  const filteredProfiles = profiles.filter((profil) => {
    // Match the city if a city filter is selected.
    const matchCity = selectedCity ? profil.city === selectedCity : true;
    // Match gender if selected.
    const matchGender = selectedGender ? profil.gender === selectedGender : true;
    // Match if smoker filter is applied.
    const matchSmoker = selectedSmoker ? profil.smoker === selectedSmoker : true;
    // Match if pet filter is applied.
    const matchPet = selectedPet ? profil.pet === selectedPet : true;
    // Match on marital status if selected.
    const matchMarital = selectedMarital ? profil.marital === selectedMarital : true;
    // Match zodiac sign if selected.
    const matchZodiac = selectedZodiac ? profil.zodiac === selectedZodiac : true;

    // For interests, use a different strategy. If interests have been selected,
    // check if the profile's labels (which may be an array or a single object) contains any of the selected interests.
    let matchInterests = true;
    if (selectedInterests.length > 0) {
      if (Array.isArray(profil.labels)) {
        // Using .some() to check if any label's name is included in the selected interests.
        matchInterests = selectedInterests.some((interest) =>
          profil.labels.some((label) => label.name === interest)
        );
      } else {
        // If labels is not an array but an object, directly check against the interest.
        matchInterests = selectedInterests.includes(profil.labels.name);
      }
    }
    
    // Return true only if the profile meets all filters.
    return (
      matchCity && 
      matchGender && 
      matchSmoker && 
      matchPet && 
      matchMarital && 
      matchZodiac && 
      matchInterests
    );
  });

  return (
    <section>
      <Container fluid="lg" className="bg-secondary my-3 py-3">
        {/* Render the profile filtering component. Pass down current filter values and their setter functions */}
        <ProfilesFilter
          selectedGender={selectedGender}
          selectedSmoker={selectedSmoker}
          selectedPet={selectedPet}
          selectedMarital={selectedMarital}
          selectedZodiac={selectedZodiac}
          selectedInterests={selectedInterests}
          setSelectedCity={setSelectedCity}
          setSelectedGender={setSelectedGender}
          setSelectedSmoker={setSelectedSmoker}
          setSelectedPet={setSelectedPet}
          setSelectedMarital={setSelectedMarital}
          setSelectedZodiac={setSelectedZodiac}
          setSelectedInterests={setSelectedInterests}
        />
        
        <Row>
          {
            // Display filtered profiles. If none are available, show a message.
            filteredProfiles.length > 0 ? (
              filteredProfiles.map((profil) => (
                <Col key={profil.id} xs={12} md={6} xl={4}>
                  <ProfilCard profil={profil}/>
                </Col>
              ))
            ) : (
              <p>Aucun profil à afficher</p>
            )
          }
        </Row>
      </Container>
    </section>
  );
};

export default ProfilesPage;