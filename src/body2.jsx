import React, { useState, useRef } from "react";
import MapComponent from "./map";
import chapters from "./chapterData";
import { Accordion } from "react-bootstrap"; // Import Accordion from Bootstrap

const Body2 = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const mapRef = useRef(null);

  const handleChapterClick = (chapter, coordinates) => {
    if (activeChapter !== chapter) {
      setActiveChapter(chapter);
      if (mapRef.current) {
        mapRef.current.flyToLocation(coordinates);
      }
    }
  };

  return (
    <div className="container-fluid text-center vh-100 p-0">
      <div className="row w-100 h-100 m-0">
        {/* Map Component occupying half the screen */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center h-100 p-0">
          <MapComponent ref={mapRef} onMarkerClick={setActiveChapter} />
        </div>

        {/* Accordion occupying the other half */}
        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center h-100 p-3">
          <Accordion defaultActiveKey="0" flush className="w-100">
            {chapters.map((chapter, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header
                  onClick={() =>
                    handleChapterClick(chapter.name, chapter.coordinates)
                  }
                >
                  {chapter.name}
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    src={chapter.logo}
                    alt={`${chapter.name} logo`}
                    style={{
                      width: "100px",
                      height: "auto",
                      display: "block",
                      margin: "10px auto"
                    }}
                  />
                  <p>{chapter.description || "No description available."}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Body2;
