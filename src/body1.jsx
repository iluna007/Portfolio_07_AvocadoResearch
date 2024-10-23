import React, { useState, useRef } from "react";
import FieldProduction from "./FieldProduction";
import Border from "./Border";
import CECOffice from "./CECOffice";
import Chapter4 from "./CU";
import Chapter5 from "./USC";
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
      <div className="container-fluid text-center vh-100 p-0">
        <div className="row w-100 h-100 m-0">
          {/* Map on the left for larger screens, full width for small screens */}
          <div className="col-lg-6 col-md-12 d-flex align-items-center h-100 p-0">
            <MapComponent ref={mapRef} onMarkerClick={setActiveChapter} />
          </div>

          {/* Accordion on the right for larger screens, full width for small screens */}
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center h-100 p-3">
            <div
              className="accordion accordion-flush w-100"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded={activeChapter === "FieldProduction"}
                    aria-controls="collapseOne"
                    onClick={() =>
                      handleChapterClick(
                        "Field Production",
                        [-100.35974467916512, 19.38365910396591]
                      )
                    } //* Coordinates for Chapter 119.38365910396591, -100.35974467916512
                  >
                    Field Production
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    activeChapter === "FieldProduction" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>info images video etc</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded={activeChapter === "Border"}
                    aria-controls="collapseTwo"
                    onClick={() =>
                      handleChapterClick(
                        "USDA/APHIS/VS Quarantine Pens Nuevo",
                        [-99.50420943878446, 27.592231323639766]
                        /**19.38365910396591, -100.35974467916512


                         */
                      )
                    } // Example coordinates for Chapter 2
                  >
                    USDA/APHIS/VS Quarantine Pens Nuevo
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    activeChapter === "Border" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>info images video etc</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded={activeChapter === "CECOffice"}
                    aria-controls="collapseThree"
                    onClick={() =>
                      handleChapterClick(
                        "CECOffice",
                        [-73.56440027437311, 45.50111304777613]
                      )
                    }
                  >
                    CEC Office
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${
                    activeChapter === "CECOffice" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>info images video etc</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded={activeChapter === "CU"}
                    aria-controls="collapseFour"
                    onClick={() =>
                      handleChapterClick(
                        "CU",
                        [-99.11774141796508, 19.430463313105125]
                      )
                    }
                  >
                    CU Office
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse ${
                    activeChapter === "CU" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>info images video etc</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded={activeChapter === "USC"}
                    aria-controls="collapseFive"
                    onClick={() =>
                      handleChapterClick(
                        "USC",
                        [-77.00898612698629, 38.890101740919036]
                      )
                    }
                  >
                    United State Capitol
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className={`accordion-collapse collapse ${
                    activeChapter === "USC" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>info images video etc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body1;
