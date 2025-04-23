import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactList from "../../components/ContactList/ContactList.jsx";
import MessageContent from "../../components/MessageContent/MessageContent.jsx";
import { getAllMessages } from "../../api/api.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";



function MessagesPage(){

  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState("");
  const location = useLocation();
  

  const { authenticated: currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function loadMessages(){

      const data = await getAllMessages();
      if(data){
        setMessages(data)
      }
    }
    loadMessages();
  },[]);

  const contactsMap = new Map();

  messages.forEach((message) => {
    const contact = message.receiver;
    if (contact.id !== currentUser.userId) {
      contactsMap.set(contact.id, contact);
    }
  });

  const contacts = Array.from(contactsMap.values());

  const receiverFromNavigation = location.state?.receiver || "";

  const activeReceiver = selectedContact || receiverFromNavigation;

  const filteredMessages = 
    activeReceiver
      ? messages.filter(
          (message) =>
            ( message.sender_id === currentUser.userId && 
              message.receiver_id === activeReceiver.id) ||
            (message.receiver_id === currentUser.userId && 
              message.sender_id === activeReceiver.id)
          )
      : [];
 
  
 return(
  <section>
    <Container fluid="lg">
      <Row>
        <Col xs={12} lg={2}>
          <ContactList contacts={contacts} onSelectContact={setSelectedContact} />
        </Col>
        <Col xs={12} lg={10}>
          <MessageContent  messages={filteredMessages} setMessages={setMessages} receiver={activeReceiver} />
        </Col>
      </Row>
    </Container>
  </section>
 )
};

export default MessagesPage;