import { useState } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ProfilesFilter({
  setSelectedCity,
  setSelectedGender,
  setSelectedSmoker,
  setSelectedPet,
  setSelectedMarital,
  setSelectedZodiac,
  setSelectedInterests

}) {
  const [show, setShow] = useState(false)

  const handleToggleClick = () => {
    setShow(true);
  };

  // Ferme le dropdown via la croix
  const handleCloseDropDown = () => {
    setShow(false);
  };

  const handleInterestSelection = (interest) => {
    setSelectedInterests((currentInterests) =>
      currentInterests.includes(interest)
        ? currentInterests.filter((existingInterest) => existingInterest !== interest)
        : [...currentInterests, interest]
    );
  };


  return (
    <nav className="bg-light p-2 rounded">
      <Row className="align-items-center">
        <Col xs={8} md={10}>
          <Row>
          {["PARIS", "LYON", "TOULOUSE", "MARSEILLE"].map((city) => (
              <Col key={city} xs={6} md={3} className="mb-2">
                <Button size="lg" onClick={() => setSelectedCity(city)}>
                  {city}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={4} md={2} className="d-flex justify-content-end">
        <Dropdown show={show} autoClose="outside" onToggle={(isOpen, event, metadata) => setShow(isOpen)} flip="false"  >
          <Dropdown.Toggle size="lg" variant="dark" id="dropdown-checkbox" onClick={handleToggleClick}>
            Filtre
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" style={{ width: "500px" }}>
            <div className="d-flex flex-row-reverse px-3">
              <CloseButton onClick={handleCloseDropDown} />
            </div>
            <Row className="px-4">
               <Col md={6}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="gender">Sexe</Form.Label>
                  <div>
                    <Form.Check inline type="radio" label="Homme" name="gender" id="gender-male" value="Homme" onChange={(e) => setSelectedGender(e.target.value)} />
                    <Form.Check inline type="radio" label="Femme" name="gender" id="gender-female" value="Femme" onChange={(e) => setSelectedGender(e.target.value)} />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="smoker">Fumeur</Form.Label>
                  <div>
                    <Form.Check inline type="radio" label="Oui" name="smoker" id="smoke-yes" value="vrai" onChange={(e) => setSelectedSmoker(e.target.value)} />
                    <Form.Check inline type="radio" label="Non" name="smoker" id="smoke-no" value="faux" onChange={(e) => setSelectedSmoker(e.target.value)} />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="pet">Animaux de compagnie</Form.Label>
                  <div>
                    <Form.Check inline type="radio" label="Oui" name="pet" id="animals-yes" value="vrai" onChange={(e) => setSelectedPet(e.target.value)} />
                    <Form.Check inline type="radio" label="Non" name="pet" id="animals-no" value="faux" onChange={(e) => setSelectedPet(e.target.value)} />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row className="px-4">
              <Col md={6}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="marital">Situation</Form.Label>
                  <Form.Select id="marital" name="marital" defaultValue="Choisir une option" onChange={(e) => setSelectedMarital(e.target.value)} >
                    <option value="">Choisir une option</option>
                    <option value="Divorcé">Divorcé</option>
                    <option value="Veuf/veuve">Veuf/veuve</option>
                    <option value="Séparé">Séparé(e)</option>
                    <option value="Célibataire">Célibataire</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="zodiac">Signe astrologique</Form.Label>
                  <Form.Select id="zodiac" name="zodiac" defaultValue="Choisir un signe" onChange={(e) => setSelectedZodiac(e.target.value)} >
                    <option value="">Choisir un signe</option>
                    <option value="Bélier">Bélier</option>
                    <option value="Taureau">Taureau</option>
                    <option value="Gémeaux">Gémeaux</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Lion">Lion</option>
                    <option value="Vierge">Vierge</option>
                    <option value="Balance">Balance</option>
                    <option value="Scorpion">Scorpion</option>
                    <option value="Sagittaire">Sagittaire</option>
                    <option value="Capricorne">Capricorne</option>
                    <option value="Verseau">Verseau</option>
                    <option value="Poisson">Poissons</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="labels">Centres d'intérêts</Form.Label>
                  <div>
                    <Form.Check type="checkbox" label="Nature" id="nature" name="labels" value="Nature" onChange={() => handleInterestSelection("Nature")}/>
                    <Form.Check type="checkbox" label="Culture" id="culture" name="labels" value="Culturel" onChange={() => handleInterestSelection("Culturel")} />
                    <Form.Check type="checkbox" label="Sports/bien-être" id="sport" name="labels" value="Sports/bien-être" onChange={() => handleInterestSelection("Sports/bien-être")} />
                    <Form.Check type="checkbox" label="Soirée à thème" id="soiree-a-theme" name="labels" value="Soirée à thème" onChange={() => handleInterestSelection("Soirée à thème")} />
                    <Form.Check type="checkbox" label="Artistique" id="artistique" name="labels" value="Artistique" onChange={() => handleInterestSelection("Artistique")} />
                    <Form.Check type="checkbox" label="Jeux de société" id="jeux-de-societe" name="labels" value="Jeux de société" onChange={() => handleInterestSelection("Jeux de société")} />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Dropdown.Menu>
        </Dropdown>
        </Col>
      </Row>
    </nav>
  );
}

export default ProfilesFilter;

