import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



// import Navbar.css from 'navbar'

function Navbar() {
  return (
    <nav className= "Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">login</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
