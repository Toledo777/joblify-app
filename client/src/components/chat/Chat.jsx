import React, { useEffect, useState } from 'react';
import "./Chat.css";

const Chat = () => {

  // used chatgpt to help us generate this function 
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // ai assisted
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setMessages([...messages, `User: ${input}`]);
      setInput('');
    }
  };

  
  return (
    <div className="chat">
      <div id="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="chat-message"> {message} </div>))}
      </div>
      <div>
        {/* gpt assisted */}
        {data ? (
          <div>
            <p>{data.result.response}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="chatForm">
        <form id="chat-form" onSubmit={handleSendMessage}>
          <input type="text" id="chat-input" placeholder="Type your message here..." value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={fetchData} type="submit">Send</button>
        </form>
      </div>
        
      </div>
      
  );
}

export default Chat;
