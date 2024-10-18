import React, { useEffect, useRef } from "react";
import Body1 from "./body1";

const Home = () => {
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
      <video
        ref={videoRef}
        src="public/Reel_provisorio.MOV"
        className="object-fit-none"
        autoPlay
        loop
        type="video/quicktime"
        muted
      ></video>
      <Body1 />
    </>
  );
};

export default Home;
