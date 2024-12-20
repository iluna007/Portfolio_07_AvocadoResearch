import React, { useState, useRef } from "react";
import MapComponent from "./MapComponent";
import chapters from "./chapterData";
import { Accordion } from "react-bootstrap";
import "./App.css"; // Adjust the path if necessary

const Body3 = () => {
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
    <div
      className="container-fluid vh-100 overflow-hidden p-0"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="row h-100 m-0">
        <div className="col d-flex align-items-center justify-content-center">
          <MapComponent ref={mapRef} onMarkerClick={setActiveChapter} />
        </div>
        <div className="col d-flex align-items-stretch justify-content-center overflow-hidden">
          <Accordion
            flush
            className="w-100 h-100"
            style={{
              overflowY: "auto"
            }}
          >
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
                  <div className="container">
                    <div className="flex">
                      {/* Map through each description property dynamically */}
                      {[...Array(7)].map((_, i) => {
                        const desc = chapter[`description${i + 1}`];
                        return desc ? (
                          <div key={i} className="col justify-text mb-1">
                            {desc}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Body3;
