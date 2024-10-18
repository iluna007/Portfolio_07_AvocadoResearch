import React, { useEffect, useRef } from "react";
import Chapter1 from "./chapter1";
import Chapter2 from "./chapter2";
import Chapter3 from "./chapter3";
import Chapter4 from "./chapter4";
import Chapter5 from "./chapter5";

const Body1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleError = (e) => {
      console.error("Error loading video", e);
    };

    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <>
      <div className="container-fluid text-center vh-100% d-flex p-0">
        <div className="row w-100 h-100 m-0">
          <div className="col-6 d-flex align-items-center h-100 p-0">
            <video
              ref={videoRef}
              src="public/Reel_provisorio.MOV"
              className="w-100 h-100"
              autoPlay
              loop
              type="video/quicktime"
              muted
            ></video>
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
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Chapter 1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter1 />
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
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Chapter 2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter2 />
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
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Chapter 3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter3 />
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
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Chapter 4
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter4 />
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
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Chapter 5
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Chapter5 />
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
