import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div class="header">
        <ul class="left-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Store</a></li>
        </ul>
        <ul class="right-links">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
  )
}

export default Header