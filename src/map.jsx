import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg"; // Replace with your Mapbox access token

const MapComponent = forwardRef(({ onMarkerClick }, ref) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ikerluna/cm2dk18gv007l01ph2anbepkk",
      center: [-99.1332, 19.4326], // Coordinates for Mexico City (Mexico DF)
      zoom: 1.2 // Adjust zoom level for a closer view of Mexico City
    });

    mapInstance.current = map;

    // Create a marker at Mexico City's coordinates
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-99.1332, 19.4326]) // Coordinates for Mexico City
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>Mexico City</h3><p>Tequila Taquitos and Cafetacuba</p>"
    );
    marker1.setPopup(popup1);

    // Handle marker click to notify parent component
    marker1.getElement().addEventListener("click", () => {
      onMarkerClick("chapter1"); // Trigger click to open Chapter 1
    });

    // Create a marker at Mexico City's coordinates
    const marker2 = new mapboxgl.Marker()
      .setLngLat([-100.3511418263735, 19.33751532408707]) // Coordinates for Mexico City
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup2 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>Aputzio</h3><p>The event</p>"
    );
    marker2.setPopup(popup2);

    // Handle marker click to notify parent component
    marker2.getElement().addEventListener("click", () => {
      onMarkerClick("chapter2"); // Trigger click to open Chapter 1
    });

    return () => map.remove(); // Clean up on component unmount
  }, [onMarkerClick]);

  // Method to fly to a specific location
  useImperativeHandle(ref, () => ({
    flyToLocation: (coordinates) => {
      mapInstance.current.flyTo({
        center: coordinates,
        zoom: 10,
        essential: true // This ensures smooth transition
      });
    }
  }));

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
});

export default MapComponent;
