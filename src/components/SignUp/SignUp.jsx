import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import SignUpImage from '../SignUpImage/SignUpImage.jsx';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';

function SignUp({ updateFormData }) {
  
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const [showFormOnSmallScreen, setShowFormOnSmallScreen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setShowFormOnSmallScreen(true);
  };

  const handleCloseForm = () => {
    setShowFormOnSmallScreen(false);
  };

  const handleSignUp = () => {
    navigate("/inscription");
  };
  
  return (
    <section>
      <Container fluid="xl" className="p-3 position-relative">
          <SignUpImage
            isLargeScreen={isLargeScreen}
            showFormOnSmallScreen={showFormOnSmallScreen}
            onButtonClick={handleButtonClick}
            onCloseForm={handleCloseForm}
          >
            {isLargeScreen || showFormOnSmallScreen ? (
              <SignUpForm onSignUp={handleSignUp} updateFormData={updateFormData}/>
            ) : (
              <Button size="lg"  type='button' className="btn-primary" aria-label="Démarer l'inscription à SeniorLove" onClick={handleButtonClick}>
                Rejoindre SeniorLove
              </Button>
            )}
          </SignUpImage>
      </Container>
    </section>
  );
};

export default SignUp;
