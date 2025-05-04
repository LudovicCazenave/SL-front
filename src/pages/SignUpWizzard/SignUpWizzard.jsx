import { useState } from "react";
import { useNavigate } from "react-router";

import { signUp } from "../../api/api.js";
import { validateFormSignup, showErrorMessage, successSignup } from "../../config/handling.error.js";

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

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

function SignUpWizzard({ formData, updateFormData }) {
  // currentSlide determines which step of the wizard is shown:
  // 0 represents the welcome screen; 1-10 map to the corresponding FormSlide.
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Moves to the next slide. Optionally enforces validation by passing a validationCount.
  const handleNextSlide = (validationCount = null) => {
    if (validationCount !== null) {
      const errorMessage = validateFormSignup(formData, validationCount);
      if (errorMessage) {
        showErrorMessage(errorMessage);
        return;
      }
    }
    // Ensure the slide does not exceed the length of the formSlides array.
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, formSlides.length));
  };

  // Allows the user to skip a step without validation.
  const handleSkip = () => {
    handleNextSlide();
  };

  // Handles the final submission of the aggregated form data.
  // The mergedData is validated (using step 10), then converted into a FormData instance if needed.
  // On a successful signup, a success alert is displayed and the user is redirected to the /connexion page.
  const handleSubmitForm = async (mergedData) => {
    const errorMessage = validateFormSignup(mergedData, 10);
    if (errorMessage) {
      showErrorMessage(errorMessage);
      return;
    }

    const formDataToSend = new FormData();

    Object.entries(mergedData).forEach(([key, value]) => {
      if (key === "picture" && value instanceof File) {
        formDataToSend.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((item) => formDataToSend.append(key, item));
      } else {
        formDataToSend.append(key, value);
      }
    });

    const createdUser = await signUp(mergedData);

    if (createdUser) {
      successSignup();
      navigate("/connexion", { replace: true });
    }
  };

  // An array holding each step/slide of the signup wizard.
  const formSlides = [
    <FormSlide1
      key="slide1"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide(1)}
      formData={formData}
    />,
    <FormSlide2
      key="slide2"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide3
      key="slide3"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide4
      key="slide4"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide5
      key="slide5"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide6
      key="slide6"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide(6)}
    />,
    <FormSlide7
      key="slide7"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide8
      key="slide8"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide9
      key="slide9"
      handleSkip={handleSkip}
      updateFormData={updateFormData}
      nextSlide={() => handleNextSlide()}
    />,
    <FormSlide10
      key="slide10"
      formData={formData}
      updateFormData={updateFormData}
      submitFormData={handleSubmitForm}
    />,
  ];

  const totalSlides = formSlides.length;
  // Progress is calculated from slide 1 onward.
  const progress =
    currentSlide > 0 ? Math.round(((currentSlide - 1) / totalSlides) * 100) : 0;

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
              "Bienvenue sur <strong>SeniorLove</strong>, l'espace dédié aux
              belles rencontres et aux moments partagés ! <br />
              <br />
              Quelques <strong>questions</strong> simples nous permettront de
              mieux vous connaître et de vous proposer des profils et des
              événements qui vous ressemblent. <br />
              <br />
              Notre processus d'inscription comprend{" "}
              <strong>dix étapes</strong>, c'est le premier pas vers de nouvelles
              connexions !"
            </p>
            <Row className="d-flex justify-content-center gap-2 mt-5">
              <Col xs="auto">
                <Button size="lg" onClick={() => setCurrentSlide(1)}>
                  Commencer votre inscription
                </Button>
              </Col>
              <Col xs="auto">
                <Button
                  size="lg"
                  variant="dark"
                  onClick={() => navigate("/accueil")}
                >
                  Retour vers l'accueil
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          // Render the appropriate slide based on currentSlide
          formSlides[currentSlide - 1]
        )}
      </Container>
    </section>
  );
}

export default SignUpWizzard;