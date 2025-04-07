import Image from 'react-bootstrap/Image';
import CloseButton from 'react-bootstrap/CloseButton';

function SignUpImage({ children, isLargeScreen, showFormOnSmallScreen, onButtonClick, onCloseForm }) {
  return (
    <>
      <Image src="/src/assets/img/diverse-img/hands.jpg" fluid className="mx-auto" />
      <div
        className={`position-absolute top-10 start-50 translate-middle-x rounded  text-center p-3 w-50 ${
          !isLargeScreen && showFormOnSmallScreen ? 'bg-opacity-100 bg-info' : 'bg-opacity-25 bg-light'
        }`}
      >
        
        {showFormOnSmallScreen && !isLargeScreen && (
          <CloseButton
            onClick={onCloseForm}
            className="position-absolute top-0 end-0 m-3"
            aria-label="Close"
          />
        )}
        <img
          src="/src/assets/img/logo/heart-2-removebg.png"
          width="80"
          height="80"
          alt="Logo"
        />
        <h1 className="text-primary">
          Senior<span className="text-secondary">Love</span>
        </h1>
        {children}
      </div>
    </>
  );
}

export default SignUpImage;

