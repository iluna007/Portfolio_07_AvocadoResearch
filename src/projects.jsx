import React, { useState } from "react";
import CardProject from "./components/Cardproject.jsx"; // Corrected import path

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectData = [
    {
      image: "/public/images/shoe.png",
      title: "Shoe 1",
      brand: "Brand A",
      price: 99,
      category: "Shoes"
    },
    {
      image: "/public/images/shoe.png",
      title: "Shoe 2",
      brand: "Brand B",
      price: 89,
      category: "Shoes"
    },
    {
      image: "/public/images/jacket.png",
      title: "Jacket 1",
      brand: "Brand C",
      price: 199,
      category: "Jackets"
    },
    {
      image: "/public/images/jacket.png",
      title: "Jacket 2",
      brand: "Brand D",
      price: 179,
      category: "Jackets"
    },
    {
      image: "/public/images/shoe.png",
      title: "Shoe 3",
      brand: "Brand E",
      price: 109,
      category: "Shoes"
    },
    {
      image: "/public/images/jacket.png",
      title: "Jacket 3",
      brand: "Brand F",
      price: 189,
      category: "Jackets"
    },
    {
      image: "/public/images/shoe.png",
      title: "Shoe 4",
      brand: "Brand G",
      price: 99,
      category: "Shoes"
    },
    {
      image: "/public/images/jacket.png",
      title: "Jacket 4",
      brand: "Brand H",
      price: 199,
      category: "Jackets"
    },
    {
      image: "/public/images/shoe.png",
      title: "Shoe 5",
      brand: "Brand I",
      price: 89,
      category: "Shoes"
    },
    {
      image: "/public/images/jacket.png",
      title: "Jacket 5",
      brand: "Brand J",
      price: 179,
      category: "Jackets"
    },
    {
      image: "/public/images/shoe.png",
      title: "Shoe 6",
      brand: "Brand K",
      price: 109,
      category: "Shoes"
    },
    {
      image: "/public/images/jacket.png",
      title: "Jacket 6",
      brand: "Brand L",
      price: 189,
      category: "Jackets"
    }
  ];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <div className="container">
      <div className="filter-buttons mb-4">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className="btn btn-secondary me-2"
          onClick={() => setFilter("Shoes")}
        >
          Shoes
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setFilter("Jackets")}
        >
          Jackets
        </button>
      </div>
      <div className="row">
        {filteredProjects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <CardProject
              image={project.image}
              title={project.title}
              brand={project.brand}
              price={project.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
