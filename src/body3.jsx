import React, { useState, useRef } from "react";
import MapComponent from "./MapComponent";
import chapters from "./chapterData";
import { Accordion } from "react-bootstrap";

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
    <div className="container-fluid vh-100 overflow-hidden p-0">
      <div className="row h-100 m-0">
        <div className="col d-flex align-items-center justify-content-center">
          <MapComponent ref={mapRef} onMarkerClick={setActiveChapter} />
        </div>
        <div className="col d-flex align-items-center justify-content-center overflow-auto">
          {/* Remove defaultActiveKey to keep all items closed initially */}
          <Accordion flush className="w-100">
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

export default Body3;
