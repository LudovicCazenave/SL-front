import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import SignUpImage from '../SignUpImage/SignUpImage.jsx';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import Button from 'react-bootstrap/Button';

function SignUp() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992); // Détection des écrans larges

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992); // Met à jour si la taille change
    };

    window.addEventListener('resize', handleResize); // Écoute le redimensionnement

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoyage
    };
  }, []);

  const [showFormOnSmallScreen, setShowFormOnSmallScreen] = useState(false);

  const handleButtonClick = () => {
    setShowFormOnSmallScreen(true); // Affiche le formulaire sur petit écran quand on clique sur le bouton
  };

  return (
    <section>
      <Container fluid="xl" className="p-3 position-relative">
        <SignUpImage>
          {/* Affichage conditionnel */}
          {isLargeScreen || showFormOnSmallScreen ? (
            <SignUpForm />
          ) : (
            <Button className="btn-primary" onClick={handleButtonClick}>
              S'inscrire
            </Button>
          )}
        </SignUpImage>
      </Container>
    </section>
    
  );
}

export default SignUp;
