import "./ProfilesFilter.scss";

import { useState } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfilesFilter({
  selectedGender,
  selectedSmoker,
  selectedPet,
  selectedMarital,
  selectedZodiac,
  selectedInterests,
  setSelectedCity,
  setSelectedGender,
  setSelectedSmoker,
  setSelectedPet,
  setSelectedMarital,
  setSelectedZodiac,
  setSelectedInterests
}) {
  // State variable to control if the dropdown is visible
  const [show, setShow] = useState(false);

  // Opens the dropdown menu
  const handleToggleClick = () => {
    setShow(true);
  };

  // Closes the dropdown menu
  const handleCloseDropDown = () => {
    setShow(false);
  };

  // Toggles the selection of an interest in the filter
  const handleInterestSelection = (interest) => {
    setSelectedInterests((currentInterests) =>
      currentInterests.includes(interest)
        ? currentInterests.filter((existingInterest) => existingInterests !== interest) // Remove if already selected
        : [...currentInterests, interest] // Add if not selected
    );
  };

  // Resets all filter selections to their default (empty) values
  const resetFilters = () => {
    setSelectedCity("");
    setSelectedGender("");
    setSelectedSmoker("");
    setSelectedPet("");
    setSelectedMarital("");
    setSelectedZodiac("");
    setSelectedInterests([]);
  };

  return (
    <nav className="bg-light p-2 rounded">
      <Row className="align-items-center">
        <Col xs={8} md={10}>
          <Row>
            {/* Render buttons for each city */}
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
          {/* Dropdown for additional filter options */}
          <Dropdown
            show={show}
            autoClose="outside"
            onToggle={(isOpen, event, metadata) => setShow(isOpen)}
            flip="false"
          >
            <Dropdown.Toggle
              size="lg"
              variant="dark"
              id="dropdown-checkbox"
              aria-label="filter les profils"
              onClick={handleToggleClick}
            >
              Filtre
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="menu-format">
              <div className="d-flex flex-row-reverse px-3">
                {/* Button to close the filter dropdown */}
                <CloseButton aria-label="Fermer le menu de filtres" onClick={handleCloseDropDown} />
              </div>
              <Row className="px-4">
                <Col md={6}>
                  <Form.Group className="py-3">
                    <Form.Label htmlFor="gender">Sexe</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        label="Homme"
                        name="gender"
                        id="gender-male"
                        value="Homme"
                        onChange={(e) => setSelectedGender(e.target.value)}
                        checked={selectedGender === "Homme"}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Femme"
                        name="gender"
                        id="gender-female"
                        value="Femme"
                        onChange={(e) => setSelectedGender(e.target.value)}
                        checked={selectedGender === "Femme"}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="py-3">
                    <Form.Label htmlFor="smoker">Fumeur</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        label="Oui"
                        name="smoker"
                        id="smoke-yes"
                        value="vrai"
                        onChange={(e) => setSelectedSmoker(e.target.value)}
                        checked={selectedSmoker === "vrai"}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Non"
                        name="smoker"
                        id="smoke-no"
                        value="faux"
                        onChange={(e) => setSelectedSmoker(e.target.value)}
                        checked={selectedSmoker === "faux"}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="py-3">
                    <Form.Label htmlFor="pet">Animaux de compagnie</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        label="Oui"
                        name="pet"
                        id="animals-yes"
                        value="vrai"
                        onChange={(e) => setSelectedPet(e.target.value)}
                        checked={selectedPet === "vrai"}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Non"
                        name="pet"
                        id="animals-no"
                        value="faux"
                        onChange={(e) => setSelectedPet(e.target.value)}
                        checked={selectedPet === "faux"}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="px-4">
                <Col md={6}>
                  <Form.Group className="py-3">
                    <Form.Label htmlFor="marital">Situation</Form.Label>
                    <Form.Select
                      id="marital"
                      name="marital"
                      value={selectedMarital}
                      onChange={(e) => setSelectedMarital(e.target.value)}
                    >
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
                    <Form.Select
                      id="zodiac"
                      name="zodiac"
                      value={selectedZodiac}
                      onChange={(e) => setSelectedZodiac(e.target.value)}
                    >
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
                      <Form.Check
                        type="checkbox"
                        label="Nature"
                        id="nature"
                        name="labels"
                        value="Nature"
                        onChange={() => handleInterestSelection("Nature")}
                        checked={selectedInterests.includes("Nature")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Culture"
                        id="culture"
                        name="labels"
                        value="Culturel"
                        onChange={() => handleInterestSelection("Culturel")}
                        checked={selectedInterests.includes("Culturel")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Sports/bien-être"
                        id="sport"
                        name="labels"
                        value="Sports/bien-être"
                        onChange={() => handleInterestSelection("Sports/bien-être")}
                        checked={selectedInterests.includes("Sports/bien-être")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Soirée à thème"
                        id="soiree-a-theme"
                        name="labels"
                        value="Soirée à thème"
                        onChange={() => handleInterestSelection("Soirée à thème")}
                        checked={selectedInterests.includes("Soirée à thème")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Artistique"
                        id="artistique"
                        name="labels"
                        value="Artistique"
                        onChange={() => handleInterestSelection("Artistique")}
                        checked={selectedInterests.includes("Artistique")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Jeux de société"
                        id="jeux-de-societe"
                        name="labels"
                        value="Jeux de société"
                        onChange={() => handleInterestSelection("Jeux de société")}
                        checked={selectedInterests.includes("Jeux de société")}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              {/* Button to clear all filters */}
              <div className="text-center">
                <Button variant="dark" type="button" onClick={resetFilters}>
                  Réintialiser
                </Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </nav>
  );
}

export default ProfilesFilter;

