import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Component that displays the contact list
function ContactList({ contacts, onSelectContact }) {
  return (
    // Main container for displaying contacts
    <Container
      fluid="lg"
      className="my-3 bg-secondary rounded d-flex flex-lg-column justify-content-center align-items-center"
    >
      {contacts.map((contact) => {
        // Set the default image based on the contact's gender
        const defaultImage =
          contact.gender === "Femme"
            ? "/src/assets/img/diverse-img/profils/Celine.png"
            : "/src/assets/img/diverse-img/profils/Jacky.jpg";

        return (
          // OverlayTrigger to display a tooltip on hover
          <OverlayTrigger
            key={contact.id}
            placement="right"
            overlay={
              // Tooltip displaying the contact's first name
              <Tooltip id={`tooltip-${contact.id}`}>
                {contact.firstname}
              </Tooltip>
            }
          >
            {/* 
              Contact image which is clickable and uses the default image if no picture is provided.
              Cursor style set to pointer to indicate it's clickable.
            */}
            <Image
              key={contact.id}
              src={contact.picture || defaultImage}
              alt={contact.firstname}
              roundedCircle
              height="80"
              width="80"
              className="m-2"
              onClick={() => onSelectContact && onSelectContact(contact)}
              style={{ cursor: "pointer" }}
            />
          </OverlayTrigger>
        );
      })}
    </Container>
  );
}

export default ContactList;