import { useState } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function EventsFilter() {
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
          <Dropdown show={show}  autoClose="outside" onToggle={(isOpen, event, metadata) => setShow(isOpen)} >
            <Dropdown.Toggle size="lg" variant="dark" id="dropdown-checkbox" onClick={handleToggleClick} >
              Filtre
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="d-flex flex-row-reverse px-3">
                <CloseButton onClick={handleCloseDropDown}/>
              </div>
              <Dropdown.Item as="div">
                <Form.Check id="nature" type="checkbox" label="Nature" name="labels" />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="sport" type="checkbox" label="Sports/bien-être" name="labels" />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="culture" type="checkbox" label="Culture" name="labels" />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="soiree-a-theme" type="checkbox" label="Soirée à thème" name="labels" />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="artistique" type="checkbox" label="Artistique" name="labels" />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Form.Check id="jeux-de-societe" type="checkbox" label="Jeux de société" name="labels" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </nav>
  );
}

export default EventsFilter;