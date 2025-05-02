import { useState, useContext } from 'react';
import { NavLink } from 'react-router';

import { AuthContext } from '../../contexts/AuthContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../NavLinks/NavLinks.jsx';
import Form from 'react-bootstrap/Form';


library.add(faBars);

function Header() {
  // Retrieve authentication status from the context
  const { authenticated } = useContext(AuthContext);
  // State to track the current page (currently used for NavLinks)
  const [currentPage, setCurrentPage] = useState("");
  // State to control whether the navbar is expanded or collapsed
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-primary"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)} // Toggle the navbar expansion state
    >
      <Container fluid>
        {/* Brand navigation directed based on authentication status */}
        <Navbar.Brand as={NavLink} to={authenticated ? "/tableau-de-bord" : "/accueil"}>
          <img
            alt=""
            src="/src/assets/img/logo/heart-2-removebg.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            aria-label={authenticated ? "Retour au tableau de bord" : "Retour à l'accueil"}
          />
        </Navbar.Brand>
        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="text-white w-40"
          onClick={() => setExpanded(!expanded)} // Explicitly toggle the expansion state when clicked
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" aria-hidden="true" />
        </Navbar.Toggle>
        {/* Collapsible navbar content */}
        <Navbar.Collapse id="navbarScroll">
          {/* Uncomment the following section to enable the search bar */}
          {/*
          <Form>
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Barre de recherche"
            />
          </Form>
          */}
          {/* Render navigation links and close the navbar on selection */}
          <NavLinks setCurrentPage={setCurrentPage} onSelect={() => setExpanded(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
