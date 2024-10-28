import React from "react";
import phrase from "../phrase"; // Adjust path as necessary
import "./Navbar2.css"; // Import the CSS

const Navbar2 = () => {
  return (
    <nav className="navbar bg-body-black">
      <div className="scrolling-text-container">
        <div className="scrolling-text" data-text={phrase}>
          {phrase}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
