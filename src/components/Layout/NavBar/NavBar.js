import React from 'react';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        PWBB
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="/" className="navbar-menu-link">
            Home
          </a>
        </li>
        <li className="navbar-menu-item">
          <a href="/about" className="navbar-menu-link">
            About
          </a>
        </li>
        <li className="navbar-menu-item">
          <a href="/contact" className="navbar-menu-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
