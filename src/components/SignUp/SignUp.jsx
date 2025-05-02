import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import SignUpImage from '../SignUpImage/SignUpImage.jsx';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';

function SignUp({ updateFormData }) {
  // Check if the current screen width qualifies as large (≥992px)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  // Control display of the sign-up form on small screens
  const [showFormOnSmallScreen, setShowFormOnSmallScreen] = useState(false);

  // Hook for programmatic navigation to another route
  const navigate = useNavigate();

  // Monitor window resize events to update the isLargeScreen state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show the form on small screens when the button is clicked
  const handleButtonClick = () => {
    setShowFormOnSmallScreen(true);
  };

  // Hide the form on small screens when requested
  const handleCloseForm = () => {
    setShowFormOnSmallScreen(false);
  };

  // Handle the sign-up action by navigating to the sign-up route
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
            // Render the sign-up form if the screen is large or if the user triggered it on a small screen
            <SignUpForm onSignUp={handleSignUp} updateFormData={updateFormData}/>
          ) : (
            // Otherwise, render a button to prompt the user to display the sign-up form
            <Button 
              size="lg" 
              type="button" 
              className="btn-primary" 
              aria-label="Démarer l'inscription à SeniorLove" 
              onClick={handleButtonClick}
            >
              Rejoindre SeniorLove
            </Button>
          )}
        </SignUpImage>
      </Container>
    </section>
  );
};

export default SignUp;
