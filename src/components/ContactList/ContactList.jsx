import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ContactList({ contacts, onSelectContact}){

  return (
    <Container fluid="lg" className="my-3  bg-secondary rounded d-flex flex-lg-column justify-content-center align-items-center" >
      {contacts.map((contact) => {
        const defaultImage = contact.gender === "Femme" ? "/src/assets/img/diverse-img/profils/Celine.png" : "/src/assets/img/diverse-img/profils/Jacky.jpg";
        return (
          <OverlayTrigger
          key={contact.id}
          placement="right"
          overlay={
            <Tooltip id={`tooltip-${contact.id}`}>
              {contact.firstname}
            </Tooltip>
          }
          >
            <Image 
            key={contact.id} 
            src={contact.picture ||defaultImage} 
            alt={contact.firstname} 
            roundedCircle  
            height="80" 
            width="80" 
            className='m-2' 
            onClick={() => onSelectContact && onSelectContact(contact)} 
            style={{ cursor: 'pointer' }}/>
          </OverlayTrigger>
        )        
      })}  
    </Container>
  )
};

export default ContactList;