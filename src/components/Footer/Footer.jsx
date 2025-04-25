import './Footer.scss';
import { Link } from "react-router";
import Nav from 'react-bootstrap/Nav';


function Footer(){
  
	return(
    <Nav className="me-auto justify-content-evenly">
      <Nav.Link as={Link} to="/informations-legales" className='text-white'>Informations légales</Nav.Link>
      <Nav.Link as={Link} to="/plan-de-site" className='text-white'>Plan de site</Nav.Link>
      <Nav.Link as={Link} to="/protection-des-donnees" className='text-white'>Protection des données</Nav.Link>
    </Nav>
	);
};

export default Footer;