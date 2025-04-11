import { useState ,useContext } from 'react';
import { NavLink } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../NavLinks/NavLinks.jsx';
import Form from 'react-bootstrap/Form';

import { AuthContext } from '../../contexts/AuthContext.jsx';

library.add(faBars);

function Header() {

  const { authenticated } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState("");
  const [expanded, setExpanded] = useState(false); 

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to={authenticated ? "/tableau-de-bord" : "/accueil"}>
          <img
            alt=""
            src="/src/assets/img/logo/heart-2-removebg.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white w-40" onClick={() => setExpanded(!expanded)}>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </Navbar.Toggle >
        <Navbar.Collapse id="navbarScroll">
          <Form>
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <NavLinks setCurrentPage={setCurrentPage} onSelect={() => setExpanded(false)} />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;