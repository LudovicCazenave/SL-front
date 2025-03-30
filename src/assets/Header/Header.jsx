import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../NavLinks/NavLinks.jsx';
import Form from 'react-bootstrap/Form';

library.add(faBars);

function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="/accueil">
          <img
            alt=""
            src="/img/logo/heart-2-removebg.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white w-40">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Form>
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <NavLinks
            isConnected={isConnected}
            setIsConnected={setIsConnected}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;