import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <ul className="nav-links">
        <li><a href="/">Joblify</a></li>
      </ul>
      <ul className="nav-links">
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    </div>
    
  )
}

export default Header;
