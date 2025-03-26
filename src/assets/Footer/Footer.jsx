import './Footer.scss';

import Nav from 'react-bootstrap/Nav';


function Footer(){
  
	return(
    <Nav className="me-auto justify-content-evenly">
      <Nav.Link href="#home" className='text-white'>Information légale</Nav.Link>
      <Nav.Link href="#features" className='text-white'>Plan de site</Nav.Link>
      <Nav.Link href="#pricing" className='text-white'>Protection des données</Nav.Link>
    </Nav>
	);
};

export default Footer;