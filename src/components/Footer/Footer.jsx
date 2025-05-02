import "./Footer.scss"; // Import custom styles for the Footer component

import { Link } from "react-router"; // Import Link for navigation between routes

import Nav from "react-bootstrap/Nav"; // Import Nav component from React Bootstrap

// Footer component displays a set of navigation links in the footer area
function Footer() {
  return (
    // Nav container with classes to space items evenly
    <Nav className="me-auto justify-content-evenly">
      {/* Each Nav.Link uses the Link component for internal routing */}
      <Nav.Link
        as={Link}
        to="/informations-legales"
        className="text-white"
        aria-label="Informations légales"
      >
        Informations légales
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/plan-de-site"
        className="text-white"
        aria-label="Plan de site"
      >
        Plan de site
      </Nav.Link>
      
      <Nav.Link
        as={Link}
        to="/protection-des-donnees"
        className="text-white"
        aria-label="Protection des données"
      >
        Protection des données
      </Nav.Link>
    </Nav>
  );
}

export default Footer;
