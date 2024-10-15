import React from "react";

const CardProject = ({ image, title, brand, price }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{brand}</p>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary">
          <i className="bi bi-cart"></i> Add to cart
        </a>
      </div>
    </div>
  );
};

export default CardProject;
