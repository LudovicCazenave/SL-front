import { useState } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Component to filter events by city and labels
function EventsFilter({ setSelectedCity, setSelectedLabels, selectedLabels }) {
  // Local state to control the visibility of the dropdown menu
  const [show, setShow] = useState(false);

  // Opens the dropdown menu
  const handleToggleClick = () => {
    setShow(true);
  };

  // Closes the dropdown menu
  const handleCloseDropDown = () => {
    setShow(false);
  };

  // Toggle the selection of a label
  const handleLabelSelection = (label) => {
    setSelectedLabels((currentLabels) =>
      currentLabels.includes(label)
        ? currentLabels.filter((existingLabel) => existingLabel !== label)
        : [...currentLabels, label]
    );
  };

  // Reset filters by clearing both selected labels and selected city
  const resetFilters = () => {
    setSelectedLabels([]);
    setSelectedCity(null);
  };

  return (
    <nav className="bg-light p-2 rounded">
      <Row className="align-items-center">
        {/* City filter buttons */}
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
        {/* Dropdown for label filters */}
        <Col xs={4} md={2} className="d-flex justify-content-end">
          <Dropdown
            show={show}
            autoClose="outside"
            onToggle={(isOpen) => setShow(isOpen)}
          >
            <Dropdown.Toggle
              size="lg"
              variant="dark"
              id="dropdown-checkbox"
              onClick={handleToggleClick}
              aria-label="filter les événements"
            >
              Filtre
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* Close button inside the dropdown */}
              <div className="d-flex flex-row-reverse px-3">
                <CloseButton
                  aria-label="Fermer le menu de filtres"
                  onClick={handleCloseDropDown}
                />
              </div>
              {/* Label filter options */}
              <Dropdown.Item as="div">
                <Form.Check
                  id="nature"
                  type="checkbox"
                  label="Nature"
                  name="labels"
                  onChange={() => handleLabelSelection("Nature")}
                  checked={selectedLabels.includes("Nature")}
                />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check
                  id="sport"
                  type="checkbox"
                  label="Sports/bien-être"
                  name="labels"
                  onChange={() => handleLabelSelection("Sports/bien-être")}
                  checked={selectedLabels.includes("Sports/bien-être")}
                />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check
                  id="culture"
                  type="checkbox"
                  label="Culturel"
                  name="labels"
                  onChange={() => handleLabelSelection("Culturel")}
                  checked={selectedLabels.includes("Culturel")}
                />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check
                  id="soiree-a-theme"
                  type="checkbox"
                  label="Soirée à thème"
                  name="labels"
                  onChange={() => handleLabelSelection("Soirée à thème")}
                  checked={selectedLabels.includes("Soirée à thème")}
                />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check
                  id="artistique"
                  type="checkbox"
                  label="Artistique"
                  name="labels"
                  onChange={() => handleLabelSelection("Artistique")}
                  checked={selectedLabels.includes("Artistique")}
                />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check
                  id="jeux-de-societe"
                  type="checkbox"
                  label="Jeux de société"
                  name="labels"
                  onChange={() => handleLabelSelection("Jeux de société")}
                  checked={selectedLabels.includes("Jeux de société")}
                />
              </Dropdown.Item>
              {/* Button to reset all filters */}
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

export default EventsFilter;