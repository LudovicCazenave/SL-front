import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import FormSlide1 from "../../components/FormSlide/FormSlide1.jsx";
import FormSlide2 from "../../components/FormSlide/FormSlide2.jsx";
import FormSlide3 from "../../components/FormSlide/FormSlide3.jsx";
import FormSlide4 from "../../components/FormSlide/FormSlide4.jsx";
import FormSlide5 from "../../components/FormSlide/FormSlide5.jsx";
import FormSlide6 from "../../components/FormSlide/FormSlide6.jsx";
import FormSlide7 from "../../components/FormSlide/FormSlide7.jsx";
import FormSlide8 from "../../components/FormSlide/FormSlide8.jsx";
import FormSlide9 from "../../components/FormSlide/FormSlide9.jsx";
import FormSlide10 from "../../components/FormSlide/FormSlide10.jsx";

function SignUpWizzard({ formData, updateFormData }) {
  const [currentSlide, setCurrentSlide] = useState(0); 

  console.log("FormData actuel :", formData); 

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, formSlides.length));
  };

  const handleSkip = () => {
    nextSlide();
  };

  const formSlides = [
    <FormSlide1 key="slide1" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide2 key="slide2" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide3 key="slide3" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide4 key="slide4" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide5 key="slide5" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide6 key="slide6" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide7 key="slide7" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide8 key="slide8" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide9 key="slide9" handleSkip={handleSkip} updateFormData={updateFormData} nextSlide={nextSlide} />,
    <FormSlide10 key="slide10" formData={formData} submitFormData={() => console.log("Submitting to API", formData)} />,
  ];

  const totalSlides = formSlides.length;
  const progress = currentSlide > 0 ? Math.round(((currentSlide - 1) / totalSlides) * 100) : 0;

  return (
    <section>
      <Container>
        <h1 className="text-primary text-center my-5">
          Senior<span className="text-secondary">Love</span>
        </h1>
        {currentSlide > 0 && (
          <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />
        )}

        {currentSlide === 0 ? (
          <>
            <p className="text-center">
              "Bienvenue sur <strong>SeniorLove</strong>, l'espace dédié aux belles rencontres et aux moments partagés ! <br /><br />
              Quelques <strong>questions</strong> simples nous permettront de mieux vous connaître et de vous proposer des profils et des événements qui vous ressemblent. <br /><br />
              Notre processus d'inscription comprend <strong>dix étapes</strong>, c'est le premier pas vers de nouvelles connexions !"
            </p>
            <Row className="d-flex justify-content-center gap-2 mt-5">
              <Col xs="auto">
                <Button size="lg" onClick={() => setCurrentSlide(1)}>
                  Commencer votre inscription
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="lg" variant="dark">
                  Retour vers l'accueil
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          formSlides[currentSlide - 1] 
        )}
      </Container>
    </section>
  );
}

export default SignUpWizzard;