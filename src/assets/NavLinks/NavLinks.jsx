import Nav from 'react-bootstrap/Nav';

function NavLinks({ isConnected, setIsConnected, currentPage, setCurrentPage }) {
  const handleLogout = () => {
    setIsConnected(false);
    setCurrentPage('');
  };

  return (
    <Nav variant="underline" defaultActiveKey="/accueil" className="ms-auto">
      {isConnected ? (
        <>

          <Nav.Link
            href="/profils"
            className="text-white text-center"
            onClick={() => setCurrentPage('profils')}
          >
            Profils
          </Nav.Link>
          <Nav.Link
            href="/evenements"
            className="text-white text-center"
            onClick={() => setCurrentPage('evenements')}
          >
            Événements
          </Nav.Link>
          <Nav.Link
            href="/messages"
            className="text-white text-center"
            onClick={() => setCurrentPage('messages')}
          >
            Messages
          </Nav.Link>
          <Nav.Link
            href="/mon-compte"
            className="text-white text-center"
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
        <Nav.Link href="/connexion" className="text-white text-center">
          Connexion
        </Nav.Link>
      )}
    </Nav>
  );
}

export default NavLinks;