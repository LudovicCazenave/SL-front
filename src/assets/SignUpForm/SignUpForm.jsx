
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignUpForm(){
	return(
		<Form>
			<Row>
				<Col className='p-3'>
					<Form.Group>
					<Form.Label htmlFor='gender'> Je suis</Form.Label>
					<Form.Check type='radio' id='gender-male' label="Homme" name='gender' required />
					<Form.Check type='radio' id='gender-female' label="Femme" name='gender' required />
					</Form.Group>
				</Col>
				<Col className='p-3'>
					<Form.Group>
					<Form.Label htmlFor='gender_match'> Je recherche</Form.Label>
					<Form.Check type='radio' id='gender_match-male' label="Homme" name="gender_match" required />
					<Form.Check type='radio'  id='gender_match-female' label="Femme" name="gender_match" required />
					</Form.Group>
				</Col>
			</Row>
		<Form.Group className='mt-3'>
			<Form.Label htmlFor='age'> Âge</Form.Label>
			<Form.Control type='number' id='age' placeholder='Votre âge...' required></Form.Control>
		</Form.Group>	
		<Form.Group className='mt-3'>
			<Form.Label htmlFor='city'> Ville</Form.Label>
			<Form.Select  id='city' className='focus-primary' required defaultValue="Votre ville">
				<option value="">Votre ville</option>
				<option value="PARIS">Paris</option>
				<option value="LYON">Lyon</option>
				<option value="TOULOUSE">Toulouse</option>
				<option value="MARSEILLE">Marseille</option>
			</Form.Select>
		</Form.Group>	
		<Button type='submit' className='mt-3 w-100'>S'inscrire</Button>
		</Form>
	)
}

export default SignUpForm;