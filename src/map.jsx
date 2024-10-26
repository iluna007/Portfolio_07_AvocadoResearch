// MapComponent.jsx
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import mapboxgl from "mapbox-gl";
import chapters from "./chapterData"; // Import the unified chapter data

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg"; // Replace with your Mapbox access token

const MapComponent = forwardRef(({ onMarkerClick }, ref) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ikerluna/cm2dk18gv007l01ph2anbepkk", // Replace with your Mapbox style URL
      center: [-99.1332, 19.4326], // Coordinates for Mexico City
      zoom: 1.2 // Adjust zoom level for a closer view of Mexico City
    });

    mapInstance.current = map;

    // Add markers dynamically
    chapters.forEach((chapter) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(chapter.coordinates)
        .addTo(map);

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${chapter.name}</h3><p>${
          chapter.description || "No description available."
        }</p>`
      );
      marker.setPopup(popup);

      marker.getElement().addEventListener("click", () => {
        onMarkerClick(chapter.name);
      });
    });

    return () => map.remove(); // Clean up on component unmount
  }, [onMarkerClick]);

  useImperativeHandle(ref, () => ({
    flyToLocation: (coordinates) => {
      mapInstance.current.flyTo({
        center: coordinates,
        zoom: 10,
        essential: true // Smooth transition
      });
    }
  }));

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%", // Fill the width of the container
        height: "100%", // Fill the height of the container
        position: "relative"
      }}
    />
  );
});

export default MapComponent;
