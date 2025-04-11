import { useState } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ProfilesFilter() {
  const [show, setShow] = useState(false)

  const handleToggleClick = () => {
    setShow(true);
  };

  // Ferme le dropdown via la croix
  const handleCloseDropDown = () => {
    setShow(false);
  };


  return (
    <nav className="bg-light p-2 rounded">
      <Row className="align-items-center">
        <Col xs={8} md={10}>
          <Row>
            <Col xs={6} md={3} className="mb-2">
              <Button size="lg" className="w-100">PARIS</Button>
            </Col>
            <Col xs={6} md={3} className="mb-2">
              <Button size="lg" className="w-100">LYON</Button>
            </Col>
            <Col xs={6} md={3} className="mb-2">
              <Button size="lg" className="w-100">TOULOUSE</Button>
            </Col>
            <Col xs={6} md={3} className="mb-2">
              <Button size="lg" className="w-100">MARSEILLE</Button>
            </Col>
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
              <Col md={4}>
                <Form.Group>
                  <Form.Label htmlFor="height">Taille</Form.Label>
                  <Form.Control type="number" id="height" name="height" placeholder="Entrez la taille" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="smoker">Fumeur</Form.Label>
                  <div>
                    <Form.Check inline type="radio" label="Oui" name="smoker" id="smoke-yes" value="true" />
                    <Form.Check inline type="radio" label="Non" name="smoker" id="smoke-no" value="false" />
                  </div>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="age">Âge</Form.Label>
                  <Form.Control type="number" id="age" name="age" placeholder="Entrez l'âge" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="px-4">
              <Col md={4}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="marital">Situation</Form.Label>
                  <Form.Select id="marital" name="marital" defaultValue="Choisir une option">
                    <option value="">Choisir une option</option>
                    <option value="Divorcé">Divorcé</option>
                    <option value="Veuf/veuve">Veuf/veuve</option>
                    <option value="Séparé">Séparé(e)</option>
                    <option value="Célibataire">Célibataire</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="pet">Animaux de compagnie</Form.Label>
                  <div>
                    <Form.Check inline type="radio" label="Oui" name="pet" id="animals-yes" value="true"/>
                    <Form.Check inline type="radio" label="Non" name="pet" id="animals-no" value="false" />
                  </div>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="zodiac">Signe astrologique</Form.Label>
                  <Form.Select id="zodiac" name="zodiac" defaultValue="Choisir un signe">
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
            </Row>

            <Row className="px-4">
              <Col md={12}>
                <Form.Group className="py-3">
                  <Form.Label htmlFor="labels">Centres d'intérêts</Form.Label>
                  <div>
                    <Form.Check type="checkbox" label="Nature" id="nature" name="labels" value="Nature" />
                    <Form.Check type="checkbox" label="Culture" id="culture" name="labels" value="Culturel" />
                    <Form.Check type="checkbox" label="Sports/bien-être" id="sport" name="labels" value="Sports/bien-être" />
                    <Form.Check type="checkbox" label="Soirée à thème" id="soiree-a-theme" name="labels" value="Soirée à thème" />
                    <Form.Check type="checkbox" label="Artistique" id="artistique" name="labels" value="Artistique"/>
                    <Form.Check type="checkbox" label="Jeux de société" id="jeux-de-societe" name="labels" value="Jeux de société" />
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

