import React, { useState } from 'react';
import "./Chat.css";

const Chat = () => {

    //gpt generated 
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setMessages([...messages, `User: ${input}`]);
      setInput('');
    }
  };

  // not this tho 
  return (
    <div className="chat">
      <div id="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="chat-message"> {message} </div>))}
      </div>
      <div class="chatForm">
        <form id="chat-form" onSubmit={handleSendMessage}>
        <input type="text" id="chat-input" placeholder="Type your message here..." value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
      </div>
      
    </div>
  );
}

export default Chat;
