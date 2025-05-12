import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactList from "../../components/ContactList/ContactList.jsx";
import MessageContent from "../../components/MessageContent/MessageContent.jsx";
import { getAllMessages } from "../../api/api.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

function MessagesPage() {
  // Trigger to refresh messages when needed
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  // State to hold all messages
  const [messages, setMessages] = useState([]);
  // State to keep track of the currently selected contact for conversation
  const [selectedContact, setSelectedContact] = useState(null);
  // Access location to potentially retrieve a receiver from navigation state
  const location = useLocation();

  // Retrieve the current user's authentication data
  const { authenticated: currentUser } = useContext(AuthContext);

  // Fetch all messages when the component mounts or when refreshTrigger updates
  useEffect(() => {
    async function loadMessages() {
      const data = await getAllMessages();
      if (data) {
        setMessages(data);
      }
    }
    loadMessages();
  }, [refreshTrigger]);

  // Build a Map of contacts by iterating over messages, excluding messages sent by the current user
  const contactsMap = new Map();
  messages.forEach((message) => {
    const contact = message.sender_id === currentUser.userId ? message.receiver : message.sender;
    if (contact.id !== currentUser.userId) {
      contactsMap.set(contact.id, contact);
    }
  });

  // Convert the contacts Map values into an array
  const contacts = Array.from(contactsMap.values());

  // Obtain the receiver from navigation state if provided
  const receiverFromNavigation = location.state?.receiver || null;

  // Determine the active receiver: use the selectedContact if available, otherwise use the receiver from navigation
  const activeReceiver = selectedContact || receiverFromNavigation;

  // If a receiver is provided from navigation and no contact has been explicitly selected, set it as the selected contact
  useEffect(() => {
    if (receiverFromNavigation && !selectedContact) {
      setSelectedContact(receiverFromNavigation);
    }
  }, [receiverFromNavigation, selectedContact]);

  // Filter messages to only include those from the conversation with the active receiver
  const filteredMessages = activeReceiver
    ? messages.filter(
        (message) =>
          (message.sender_id === currentUser.userId &&
            message.receiver_id === activeReceiver.id) ||
          (message.receiver_id === currentUser.userId &&
            message.sender_id === activeReceiver.id)
      )
    : [];

  const handleMessageSent = (receiver) => {
    setRefreshTrigger((prev) => prev + 1);
    setSelectedContact(receiver); 
  }

  return (
    <section>
      <Container fluid="lg">
        <Row>
          {/* Contact list column */}
          <Col xs={12} lg={2}>
            <ContactList
              contacts={contacts}
              onSelectContact={setSelectedContact?.id}
            />
          </Col>
          {/* Message content column */}
          <Col xs={12} lg={10}>
            <MessageContent
              messages={filteredMessages}
              setMessages={setMessages}
              receiver={activeReceiver}
              onMessageSent={handleMessageSent}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MessagesPage;