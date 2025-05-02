import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { checkMinimumAge } from "../../config/handling.error.js";

function SignUpForm({ onSignUp, updateFormData }) {
  // Handle form submission for the sign-up wizard
  const handleSignUpWizzard = (e) => {
    e.preventDefault(); 

    // Convert the age input value to a number
    const ageValue = Number(e.target.age.value);

    // If the age is less than 60, trigger the minimum age check and halt the process
    if (ageValue < 60) {
      checkMinimumAge();
      return;
    }

    // Build an object with the form field values
    const formValues = {
      gender: e.target.gender.value,
      gender_match: e.target.gender_match.value,
      age: ageValue,
      city: e.target.city.value,
    };

    updateFormData(formValues); // Update parent state with the collected form values
    onSignUp(); // Proceed with the sign-up process
  };

  return (
    <Form onSubmit={handleSignUpWizzard}>
      <Row>
        <Col className='p-3'>
          <Form.Group>
            {/* Label for the user's gender selection */}
            <Form.Label htmlFor='gender'> Je suis</Form.Label>
            <Form.Check type='radio' id='gender-male' label="Homme" name='gender' value='Homme' required />
            <Form.Check type='radio' id='gender-female' label="Femme" name='gender' value='Femme' required />
          </Form.Group>
        </Col>
        <Col className='p-3'>
          <Form.Group>
            {/* Label for the gender the user is interested in */}
            <Form.Label htmlFor='gender_match'> Je recherche</Form.Label>
            <Form.Check type='radio' id='gender_match-male' label="Homme" name="gender_match" value='Homme' required />
            <Form.Check type='radio' id='gender_match-female' label="Femme" name="gender_match" value='Femme' required />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mt-3'>
        {/* Input field for the user's age */}
        <Form.Label htmlFor='age'> Âge</Form.Label>
        <Form.Control type='number' id='age' name="age" placeholder='Votre âge...' required />
      </Form.Group>
      <Form.Group className='mt-3'>
        {/* Dropdown for selecting the user's city */}
        <Form.Label htmlFor='city'> Ville</Form.Label>
        <Form.Select id='city' className='focus-primary' name='city' required defaultValue="Votre ville">
          <option value="">Votre ville</option>
          <option value="PARIS">Paris</option>
          <option value="LYON">Lyon</option>
          <option value="TOULOUSE">Toulouse</option>
          <option value="MARSEILLE">Marseille</option>
        </Form.Select>
      </Form.Group>
      {/* Button to submit the sign-up form */}
      <Button size="lg" type='submit' className='mt-3 w-100'>S'inscrire</Button>
    </Form>
  );
};

export default SignUpForm;