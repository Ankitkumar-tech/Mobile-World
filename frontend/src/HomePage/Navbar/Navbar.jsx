import React from 'react';
// import logo from './Yellow-Mobile-Book-Free-Logo.jpg';
import './Navbar.css'; // Create this CSS file

const Navbar = () => {
    const logo="https://i.ibb.co/L57fQzQ/Yellow-Mobile-Book-Free-Logo.jpg"
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Mobile World Logo" />
        <span className="logo-text">Mobile World</span>
      </div>
      <ul className="nav-links">
        <li className="nav-link">Mobiles</li>
        <li className="nav-link">Chargers</li>
        <li className="nav-link">Earphones</li>
        <li className="nav-link">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
