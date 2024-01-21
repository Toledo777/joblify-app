import React from 'react'
import "./Content.css";
import Chat from '../chat/Chat'

const Content = () => {
  return (
    <div class="content">
      <hr/>
        <h2>Welcome to Joblify's AI Chatbot!</h2>
        <p>Unlock your career potential!</p>
        <p>I'm here to help you succeed. Ask me anything!</p>
        <Chat/>
      </div>
  )
}

export default Content