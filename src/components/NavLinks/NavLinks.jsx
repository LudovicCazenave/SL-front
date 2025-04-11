import "./NavLinks.scss";

import { useContext } from "react";
import { NavLink, useLocation } from "react-router"; 

import { AuthContext } from "../../contexts/AuthContext.jsx";
import { logOutMyAccount } from "../../api/api.js";

import Nav from "react-bootstrap/Nav";


function NavLinks({ setCurrentPage, onSelect }) {
  
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const isOnMonCompte = location.pathname === "/mon-compte";

  const handleLogout = async () => {
    try{
      const logout = await logOutMyAccount();
      if(logout){
        setAuthenticated(false);
        setCurrentPage('');
      } 
    } catch (error){
      console.error("error logout", error)
    }
  };

  const getLinkClassName = ({ isActive }) => {
    return isActive ? "text-white text-center active" : "text-white text-center";
  };

  return (
    <Nav variant="underline" defaultActiveKey="/accueil" className="ms-auto" onSelect={onSelect} >
      {authenticated ? (
        <>
          <Nav.Link
            as={NavLink}
            to="/profils"
            className={getLinkClassName}
            onClick={() => {setCurrentPage("profils"); onSelect();}}
          >
            Profils
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/evenements"
            className={getLinkClassName}
            onClick={() => {setCurrentPage("evenements"); onSelect();}}
          >
            Événements
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/messages"
            className={getLinkClassName}
            onClick={() => {setCurrentPage("messages"); onSelect();}}
          >
            Messages
          </Nav.Link>
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
          >
            {isOnMonCompte ? "Se déconnecter" : "Mon compte"}
          </Nav.Link>
        </>
      ) : (
        <Nav.Link as={NavLink} to="/connexion" className={getLinkClassName} onClick={() => onSelect()}>
          Connexion
        </Nav.Link>
      )}
    </Nav>
  );
};

export default NavLinks;
