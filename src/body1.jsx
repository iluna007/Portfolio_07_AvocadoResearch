import React, { useState, useRef } from "react";
import Chapter1 from "./chapter1";
import Chapter2 from "./chapter2";
import Chapter3 from "./chapter3";
import Chapter4 from "./chapter4";
import Chapter5 from "./chapter5";
import MapComponent from "./map";

const Body1 = () => {
  const [activeChapter, setActiveChapter] = useState(null); // Track active chapter
  const mapRef = useRef(null); // Ref to access MapComponent

  // Function to handle clicks on the accordion
  const handleChapterClick = (chapter, coordinates) => {
    if (activeChapter !== chapter) {
      // Only fly to marker if the chapter is not already active (expanding)
      setActiveChapter(chapter); // Update the active chapter when an accordion item is clicked
      if (mapRef.current) {
        mapRef.current.flyToLocation(coordinates); // Fly to corresponding marker location
      }
    }
  };

  return (
    <>
      <div className="container-fluid text-center vh-100% d-flex p-0">
        <div className="row w-100 h-100 m-0">
          <div className="col-6 d-flex align-items-center h-100 p-0">
            <MapComponent ref={mapRef} onMarkerClick={setActiveChapter} />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center h-100% p-100%">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded={activeChapter === "chapter1"}
                    aria-controls="collapseOne"
                    onClick={() =>
                      handleChapterClick("chapter1", [-99.1332, 19.4326])
                    } // Coordinates for Chapter 1
                  >
                    Document 1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    activeChapter === "chapter1" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter1 />
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for Chapter 2, 3, 4, 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded={activeChapter === "chapter2"}
                    aria-controls="collapseTwo"
                    onClick={() =>
                      handleChapterClick(
                        "chapter2",
                        [-100.3511418263735, 19.33751532408707]
                      )
                    } // Example coordinates for Chapter 2
                  >
                    Document 2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    activeChapter === "chapter2" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter2 />
                  </div>
                </div>
              </div>
              {/* Similar structure for the other chapters */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body1;
