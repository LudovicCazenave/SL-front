import './Footer.scss';
import { Link } from "react-router";
import Nav from 'react-bootstrap/Nav';


function Footer(){
  
	return(
    <Nav className="me-auto justify-content-evenly">
      <Nav.Link as={Link} to="/informations-legales" className='text-white' aria-label='Informations légales'>Informations légales</Nav.Link>
      <Nav.Link as={Link} to="/plan-de-site" className='text-white' aria-label='Plan de site'>Plan de site</Nav.Link>
      <Nav.Link as={Link} to="/protection-des-donnees" className='text-white' aria-label='protection des données'>Protection des données</Nav.Link>
    </Nav>
	);
};

export default Footer;