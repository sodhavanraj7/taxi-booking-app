 
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">🚖 Taxi Booking</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


