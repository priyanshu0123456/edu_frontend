import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">EduMaster</Link>
      </div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        {["/", "/about", "/courses", "/contact"].map((path, idx) => {
          const text = ["Home", "About Us", "Courses", "Contact Us"][idx];
          return (
            <li key={idx}>
              <Link to={path}>{text}</Link>
            </li>
          );
        })}
        <li className="auth-buttons">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
}

export default Navbar;