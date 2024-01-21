import React from 'react'
import "./Content.css";
import Chat from '../chat/Chat'

const Content = () => {
  return (
    <div class="content">
        <h1>Joblify</h1>
        <p>Elevate Your Resume, Dominate The Market!</p>
        <Chat/>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
  )
}

export default Content