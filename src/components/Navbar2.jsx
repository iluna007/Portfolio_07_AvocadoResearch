import React from "react";
import frase from "../frase"; // Adjust path as necessary

const Navbar2 = () => {
  return (
    <nav className="navbar bg-body-black">
      <div className="scrolling-text-container">
        <div className="scrolling-text">{frase}</div>
      </div>
    </nav>
  );
};

export default Navbar2;
