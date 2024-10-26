// ChapterButton.jsx
import React, { useState } from "react";

const ChapterButton = ({ name, logo, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    onClick(); // Call the passed onClick function to handle chapter selection
  };

  return (
    <button
      className={`grid-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
      onMouseLeave={() => setIsActive(false)} // Reset to grayscale on mouse leave
    >
      <img src={logo} alt={`${name} logo`} className="logo-image" />
      <div>{name}</div>

      <style jsx>{`
        .grid-button {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1em;
          font-weight: bold;
          border: 1px solid #ddd;
          background-color: #f8f9fa;
          cursor: pointer;
          padding: 0;
        }
        .logo-image {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }
        .grid-button:hover .logo-image,
        .grid-button.active .logo-image {
          filter: grayscale(0%);
        }
      `}</style>
    </button>
  );
};

export default ChapterButton;
