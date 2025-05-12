import "./MessageContent.scss";

import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext.jsx";
import { sendMessage } from "../../api/api.js";
import { successSendMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function MessageContent({ messages, setMessages, receiver, onMessageSent }) {
  // State to hold the content of the new message being typed
  const [newMessage, setNewMessage] = useState("");
  // Retrieve the current authenticated user from the AuthContext
  const { authenticated: currentUser } = useContext(AuthContext);

  // Function to handle sending a new message
  const handleSendMessage = async (e) => {
    e.preventDefault();

    // If the message input is empty or contains only whitespace, do nothing
    if (!newMessage.trim()) {
      return;
    }

    // Construct the message data object with the content and receiver's id
    const messageData = {
      content: newMessage,
      receiver_id: receiver.id,
    };

    // Send the message using the sendMessage API call
    const response = await sendMessage(messageData);

    // On successful message send, trigger the success notification and clear the input
    if (response) {
      successSendMessage();

      const sentMessage = {
        id: response.id || Date.now(), 
        content: newMessage,
        sender_id: currentUser.userId,
        receiver_id: receiver.id,
        created_at: new Date().toISOString(),
        sender: currentUser,
        receiver,
      };
      setMessages((prev) => [...prev, sentMessage]);
      setNewMessage("");
      onMessageSent(receiver); // Notifier MessagesPage
    }
  };

  return (
    <>
      {/* Header container for the messaging section */}
      <Container fluid="lg" className="bg-primary mt-lg-3 py-1 rounded-top">
        <h2 className="h1 text-white text-center">Messagerie</h2>
      </Container>
      {/* Display conversation header based on whether a receiver is selected */}
      {receiver ? (
        <h3 className="text-white text-center">
          Conversation avec {receiver.firstname}
        </h3>
      ) : (
        <h3 className="text-white text-center">
          Veuillez sélectionner un contact pour afficher la conversation
        </h3>
      )}
      {/* Container displaying the sorted list of messages */}
      <Container fluid="lg" className="bg-white py-3 rounded-bottom">
        {messages
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .map((message) => (
            <div
              key={message.id}
              className={`mb-2 ${
                message.sender_id === currentUser.userId ? "text-end" : "text-start"
              }`}
            >
              <p
                className={`${
                  message.sender_id === currentUser.userId ? "bg-info" : "bg-secondary"
                } rounded d-inline-block p-2 message-format`}
              >
                <strong>{message.content}</strong>
              </p>
            </div>
          ))}
      </Container>
      {/* Container for the message input form */}
      <Container fluid="lg" className="py-3">
        <Form onSubmit={handleSendMessage}>
          <InputGroup>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Votre message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
}

export default MessageContent;