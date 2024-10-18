import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./home";
import Chapter1 from "./chapter1";
import Chapter2 from "./chapter2";
import Chapter3 from "./chapter3";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Chapter1" element={<Chapter1 />} />
            <Route path="/Chapter2" element={<Chapter2 />} />
            <Route path="/Chapter3" element={<Chapter3 />} />
          </Routes>
        </div>
      </>
      <Footer />
    </Router>
  );
}

export default App;
