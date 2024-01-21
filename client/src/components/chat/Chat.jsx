import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      const userMessage = { type: 'user', content: "User: " + input };

      setMessages([...messages, userMessage]);
      setInput('');

      try {
        setLoading(true);

        // Replace spaces with %20 in the input message
        const formattedMessage = input.replace(/ /g, '%20');

        // Fetch assistant response
        const response = await fetch('http://localhost:5051/api/chatting/' + formattedMessage);
        const responseData = await response.json();

        // Update state with user and assistant messages
        const assistantMessage = { type: 'assistant', content: "Joblify AI: " + responseData.result.response };
        setMessages([...messages, userMessage, assistantMessage]);

        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="chat">
      <div id="chat-window">
        <p>Joblify AI: Unlock your career potential!
        I'm here to help you succeed. Ask me anything!</p>
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.type}`}>
            {message.content}
            {loading ? (<p>Loading answer...</p>): (<p></p>)}
          </div>
        ))}
      </div>
  
      <div className="chatForm">
        <form id="chat-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            id="chat-input"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
