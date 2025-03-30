import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import SignUpImage from '../SignUpImage/SignUpImage.jsx';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import Button from 'react-bootstrap/Button';

function SignUp() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const [showFormOnSmallScreen, setShowFormOnSmallScreen] = useState(false);

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
            <SignUpForm />
          ) : (
            <Button size="lg"  type='button' className="btn-primary" onClick={handleButtonClick}>
              Rejoindre SeniorLove
            </Button>
          )}
        </SignUpImage>
      </Container>
    </section>
  );
}

export default SignUp;
