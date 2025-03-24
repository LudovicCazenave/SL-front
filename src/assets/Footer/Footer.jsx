import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss'

function Footer(){
	return(
			<footer className='footer mt-5 bg-primary py-4'>
          <Nav className="me-auto justify-content-evenly">
            <Nav.Link href="#home" className='text-white'>Information légale</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Plan de site</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Protection des données</Nav.Link>
          </Nav>
			</footer>
	)
}

export default Footer