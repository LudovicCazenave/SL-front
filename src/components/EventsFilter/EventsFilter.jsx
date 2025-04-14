import { useState, useEffect } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function EventsFilter({ setSelectedCity, setSelectedLabels }) {
  const [show, setShow] = useState(false);

  const handleToggleClick = () => {
    setShow(true);
  };

  const handleCloseDropDown = () => {
    setShow(false);
  };

  const handlelabelSelection = (label) =>{
    setSelectedLabels((currentLabels) => currentLabels.includes(label)
      ? currentLabels.filter((existingLabel) => existingLabel !== label)
      : [...currentLabels, label]
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
          <Dropdown show={show}  autoClose="outside" onToggle={(isOpen, event, metadata) => setShow(isOpen)} >
            <Dropdown.Toggle size="lg" variant="dark" id="dropdown-checkbox" onClick={handleToggleClick} >
              Filtre
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="d-flex flex-row-reverse px-3">
                <CloseButton onClick={handleCloseDropDown}/>
              </div>
              <Dropdown.Item as="div">
                <Form.Check id="nature" type="checkbox" label="Nature" name="labels" onChange={() => handlelabelSelection("Nature")} />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="sport" type="checkbox" label="Sports/bien-être" name="labels" onChange={() => handlelabelSelection("Sports/bien-être")} />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="culture" type="checkbox" label="Culturel" name="labels" onChange={() => handlelabelSelection("Culturel")} />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="soiree-a-theme" type="checkbox" label="Soirée à thème" name="labels" onChange={() => handlelabelSelection("Soirée à thème")} />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="artistique" type="checkbox" label="Artistique" name="labels" onChange={() => handlelabelSelection("Artistique")} />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="jeux-de-societe" type="checkbox" label="Jeux de société" name="labels" onChange={() => handlelabelSelection("Jeux de société")} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </nav>
  );
}

export default EventsFilter;