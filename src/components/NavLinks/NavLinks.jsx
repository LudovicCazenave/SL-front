import "./NavLinks.scss";

import { useContext } from "react";
import { NavLink, useLocation } from "react-router";

import { AuthContext } from "../../contexts/AuthContext.jsx";
import { logOutMyAccount } from "../../api/api.js";

import Nav from "react-bootstrap/Nav";

function NavLinks({ setCurrentPage, onSelect }) {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  // Check if the current route is "/mon-compte"
  const isOnMonCompte = location.pathname === "/mon-compte";

  // Async function to log out the user and update the authentication state
  const handleLogout = async () => {
    const logout = await logOutMyAccount();
    if (logout) {
      setAuthenticated(false);
      setCurrentPage('');
    }
  };

  // Returns CSS classes based on whether the link is active or not
  const getLinkClassName = ({ isActive }) => {
    return isActive ? "text-white text-center active" : "text-white text-center";
  };

  return (
    <Nav variant="underline" defaultActiveKey="/accueil" className="ms-auto" onSelect={onSelect}>
      {authenticated ? (
        <>
          {/* Navigation link for "Profils" */}
          <Nav.Link
            as={NavLink}
            to="/profils"
            className={getLinkClassName}
            onClick={() => {
              setCurrentPage("profils");
              onSelect();
            }}
          >
            Profils
          </Nav.Link>
          {/* Navigation link for "Événements" */}
          <Nav.Link
            as={NavLink}
            to="/evenements"
            className={getLinkClassName}
            onClick={() => {
              setCurrentPage("evenements");
              onSelect();
            }}
          >
            Événements
          </Nav.Link>
          {/* Navigation link for "Messages" */}
          <Nav.Link
            as={NavLink}
            to="/messages"
            className={getLinkClassName}
            onClick={() => {
              setCurrentPage("messages");
              onSelect();
            }}
          >
            Messages
          </Nav.Link>
          {/* Navigation link for "Mon compte" which logs out when already on the account page */}
          <Nav.Link
            as={NavLink}
            to="/mon-compte"
            className={getLinkClassName}
            onClick={() => {
              if (isOnMonCompte) {
                handleLogout();
              } else {
                setCurrentPage("mon-compte");
              }
              onSelect();
            }}
            aria-label={isOnMonCompte ? "Lien pour se déconnecter" : "Lien vers Mon Compte"}
          >
            {isOnMonCompte ? "Se déconnecter" : "Mon compte"}
          </Nav.Link>
        </>
      ) : (
        // If not authenticated, display the "Connexion" link
        <Nav.Link as={NavLink} to="/connexion" className={getLinkClassName} onClick={() => onSelect()}>
          Connexion
        </Nav.Link>
      )}
    </Nav>
  );
};

export default NavLinks;
