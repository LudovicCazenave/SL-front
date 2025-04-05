import "./NavLinks.scss"

import { NavLink } from 'react-router';

import Nav from 'react-bootstrap/Nav';


function NavLinks({ isConnected, setIsConnected, currentPage, setCurrentPage }) {
  const handleLogout = () => {
    setIsConnected(false);
    setCurrentPage('');
  };

  const getLinkClassName = ({ isActive }) => {
    return isActive ? "text-white text-center active" : "text-white text-center";
  };

  return (
    <Nav variant="underline" defaultActiveKey="/accueil" className="ms-auto">
      {isConnected ? (
        <>
          <Nav.Link
            as={NavLink}
            to="/profils"
            className={getLinkClassName}
            onClick={() => setCurrentPage('profils')}
          >
            Profils
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/evenements"
            className={getLinkClassName}
            onClick={() => setCurrentPage('evenements')}
          >
            Événements
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/messages"
            className={getLinkClassName}
            onClick={() => setCurrentPage('messages')}
          >
            Messages
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/mon-compte"
            className={getLinkClassName}
            onClick={() => {
              if (currentPage === 'mon-compte') {
                handleLogout();
              } else {
                setCurrentPage('mon-compte');
              }
            }}
          >
            {currentPage === 'mon-compte' ? 'Se déconnecter' : 'Mon compte'}
          </Nav.Link>
        </>
      ) : (
        <Nav.Link
          as={NavLink}
          to="/connexion"
          className={getLinkClassName}
        >
          Connexion
        </Nav.Link>
      )}
    </Nav>
  );
}

export default NavLinks;