import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./home";
import FieldProduction from "./FieldProduction";
import Border from "./Border";
import CECOffice from "./CECOffice";
import CU from "./CU";
import USC from "./USC";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FieldProduction" element={<FieldProduction />} />
            <Route path="/Border" element={<Border />} />
            <Route path="/CECOffice" element={<CECOffice />} />
            <Route path="/CU" element={<CU />} />
            <Route path="/USC" element={<USC />} />
          </Routes>
        </div>
      </>
      <Footer />
    </Router>
  );
}

export default App;
