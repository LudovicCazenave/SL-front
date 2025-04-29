import "./MessageContent.scss"

import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext.jsx";
import { getAllMessages, sendMessage } from "../../api/api.js";
import { successSendMessage } from "../../config/handling.error.js";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";



function MessageContent({ messages, setMessages, receiver }) {

  const [newMessage, setNewMessage] = useState("");
  const { authenticated: currentUser } = useContext(AuthContext)

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(!newMessage.trim()){
      return ;
    }

    const messageData = {
      content: newMessage,
      receiver_id: receiver.id
    };

    const response = await sendMessage(messageData);

    if(response){
      successSendMessage();
      setNewMessage("");
    }
    const updateMessages = await getAllMessages();

    if(updateMessages){
      setMessages(updateMessages);
    }
  }

  return (
    <>
      <Container fluid="lg" className="bg-primary mt-lg-3 py-1 rounded-top">
        <h2 className="h1 text-white text-center">Messagerie</h2>
      </Container>
      {receiver ? (
        <h3 className="text-white text-center">
          Conversation avec {receiver.firstname}
        </h3>
      ) : (
        <h3 className="text-white text-center">
          Veuillez sélectionner un contact pour afficher la conversation
        </h3>
      )}

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
      <Container fluid="lg" className="py-3">
        <Form  onSubmit={handleSendMessage}>
          <InputGroup>
            <Form.Control type="text" size="lg" placeholder="Votre message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
            <Button variant="primary" type="submit">Envoyer</Button>
          </InputGroup>
        </Form>
        
      </Container>
    </>
  );
}

export default MessageContent;