import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg"; // Replace with your Mapbox access token

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ikerluna/cm2dk18gv007l01ph2anbepkk", // Replace with your Mapbox style URL
      center: [-99.1332, 19.4326], // Coordinates for Mexico City (Mexico DF)
      zoom: 10 // Adjust zoom level for a closer view of Mexico City
    });

    // Create a marker at Mexico City's coordinates
    const marker = new mapboxgl.Marker()
      .setLngLat([-99.1332, 19.4326]) // Coordinates for Mexico City
      .addTo(map);

    // Create a popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>Mexico City</h3><p>This is the capital of Mexico.</p>"
    );

    // Attach the popup to the marker
    marker.setPopup(popup);

    return () => map.remove(); // Clean up on component unmount
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100vh",
        height: "100vh",
        position: "relative",
        top: 0,
        bottom: 0
      }}
    />
  );
};

export default MapComponent;
