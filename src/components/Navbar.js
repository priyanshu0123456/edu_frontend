import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on link click
  const handleLinkClick = () => {
    if (open) setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          EduMaster
        </Link>
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        {["/", "/about", "/courses", "/contact"].map((path, idx) => {
          const text = ["Home", "About Us", "Courses", "Contact Us"][idx];
          return (
            <li key={idx}>
              <Link to={path} onClick={handleLinkClick}>
                {text}
              </Link>
            </li>
          );
        })}

        <li className="auth-buttons">
          <Link to="/login" className="btn" onClick={handleLinkClick}>
            Login
          </Link>
          <Link
            to="/register"
            className="btn btn-primary"
            onClick={handleLinkClick}
          >
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
