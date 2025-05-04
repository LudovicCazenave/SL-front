import Image from 'react-bootstrap/Image';
import CloseButton from 'react-bootstrap/CloseButton';

// The SignUpImage component serves as a decorative wrapper for the sign-up page,
// displaying a background image with an overlay container for content.
function SignUpImage({ children, isLargeScreen, showFormOnSmallScreen, onButtonClick, onCloseForm }) {
  return (
    <>
      {/* Display the main background image */}
      <Image
        src="/assets/img/diverse-img/hands.jpg"
        alt='Image introduction SeniorLove'
        fluid
        className="mx-auto"
      />
      {/* Overlay container with dynamic background opacity and color based on screen size and form visibility */}
      <div
        className={`position-absolute top-10 start-50 translate-middle-x rounded text-center p-3 w-50 ${
          !isLargeScreen && showFormOnSmallScreen ? 'bg-opacity-100 bg-info' : 'bg-opacity-25 bg-light'
        }`}
      >
        {/* If on a small screen and the form is displayed, show a close button to hide the form */}
        {showFormOnSmallScreen && !isLargeScreen && (
          <CloseButton
            onClick={onCloseForm}
            className="position-absolute top-0 end-0 m-3"
            aria-label="Boutton de fermeture"
          />
        )}
        {/* Display the logo image */}
        <img
          src="/assets/img/logo/heart-2-removebg.png"
          width="80"
          height="80"
          alt="Logo"
        />
        {/* Display the main title */}
        <h1 className="text-primary">
          Senior<span className="text-secondary">Love</span>
        </h1>
        {/* Render any additional child components passed into SignUpImage */}
        {children}
      </div>
    </>
  );
}

export default SignUpImage;

