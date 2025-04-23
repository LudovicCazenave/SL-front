import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function ContactList({ contacts, onSelectContact}){

  return (
    <Container fluid="lg" className="my-3  bg-secondary rounded d-flex flex-lg-column justify-content-center align-items-center" >
      {contacts.map((contact) =>(
        <Image 
          key={contact.id} 
          src={contact.picture ||'/src/assets/img/diverse-img/profils/Celine.png'} 
          alt={contact.firstname} 
          roundedCircle  
          height="80" 
          width="80" 
          className='m-2' 
          onClick={() => onSelectContact && onSelectContact(contact)} 
          style={{ cursor: 'pointer' }}/>
      ))}
      
    </Container>
  )
};

export default ContactList;