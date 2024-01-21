import React, { useEffect, useState } from 'react';
import "./Chat.css";

const Chat = () => {

  // used chatgpt to help us generate this function 
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const [data, setData] = useState('');

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://api.example.com/d');
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const handleSendMessage = (event) => {
  //   event.preventDefault();
  //   if (input.trim()) {
  //     setMessages([...messages, `User: ${input}`]);
  //     setInput('');
  //   }
  // };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      setMessages([...messages, `User: ${input}`]);
      setInput('');
      
      try {
        let formattedMessage = input.replace(/ /g, "%20")
        const response = await fetch('http://localhost:5051/api/chatting/' + formattedMessage);
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  
  return (
    <div className="chat">
      <div id="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="chat-message"> {message} </div>))}
      </div>
      <div>
        {data ? (
          <div>
            <p>Joblify Assistant {data.result.response}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="chatForm">
        <form id="chat-form" onSubmit={handleSendMessage}>
          <input type="text" id="chat-input" placeholder="Type your message here..." value={input} onChange={(e) => setInput(e.target.value)}/>
          <button type="submit">Send</button>
        </form>
      </div>
        
      </div>
      
  );
}

export default Chat;
