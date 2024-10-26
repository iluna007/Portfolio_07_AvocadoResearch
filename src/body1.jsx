import React, { useState, useRef } from "react";
import MapComponent from "./map";
import chapters from "./chapterData";
import ChapterButton from "./ChapterButton"; // Import as JSX component

const Body1 = () => {
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
    <div className="container-fluid text-center vh-100 p-0 example">
      <div className="row w-100 h-100 m-0">
        {/* Map Component */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center h-100 p-0">
          <MapComponent ref={mapRef} onMarkerClick={setActiveChapter} />
        </div>

        {/* Button Grid */}
        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center h-100 p-3">
          <div className="grid-container">
            {chapters.map((chapter, index) => (
              <ChapterButton
                key={index}
                name={chapter.name}
                logo={chapter.logo}
                onClick={() =>
                  handleChapterClick(chapter.name, chapter.coordinates)
                }
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 10px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Body1;
