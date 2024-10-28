import React from "react";
import frase from "../frase"; // Adjust path as necessary
import "./Navbar.css"; // Import the new Navbar CSS

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid d-flex align-items-center">
        {/* Scrolling text container */}
        <div className="scrolling-text-container">
          <div className="scrolling-text">{frase}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
