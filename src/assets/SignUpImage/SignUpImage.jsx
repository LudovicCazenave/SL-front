import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

function SignUpImage({ children }) {
 
  return (
    <>
      <Image src="/img/diverse-img/hands.jpg" fluid className="mx-auto" />
      <div className="position-absolute top-10 start-50 translate translate-middle-x rounded bg-light bg-opacity-25 text-center p-3 w-50">
        <img
          src="/img/logo/heart-2-removebg.png"
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
