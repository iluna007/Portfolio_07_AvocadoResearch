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
      style: "mapbox://styles/ikerluna/cm2dk18gv007l01ph2anbepkk", // Replace with your Mapbox style URL
      center: [-99.1332, 19.4326], // Coordinates for Mexico City (Mexico DF)
      zoom: 1.2 // Adjust zoom level for a closer view of Mexico City
    });

    mapInstance.current = map;
    //////////////////////////////////////////////////////////////////////////
    // Create a marker at Field's coordinates
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-100.35974467916512, 19.38365910396591]) // Coordinates for Mexico City
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>Field Production</h3><p>xxx</p>"
    );
    marker1.setPopup(popup1);

    // Handle marker click to notify parent component
    marker1.getElement().addEventListener("click", () => {
      onMarkerClick("FieldProduction"); // Trigger click to open Chapter 1
    });
    //////////////////////////////////////////////////////////////////////////
    // Create a marker at USDA/APHIS/VS Quarantine's coordinates
    const marker2 = new mapboxgl.Marker()
      .setLngLat([-99.50420943878446, 27.592231323639766]) // Coordinates for USDA/APHIS/VS Quarantine
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup2 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>USDA/APHIS/VS Quarantine</h3><p>xxx</p>"
    );
    marker2.setPopup(popup2);

    // Handle marker click to notify parent component
    marker2.getElement().addEventListener("click", () => {
      onMarkerClick("Border"); // Trigger click to open Chapter 2
    });
    //////////////////////////////////////////////////////////////////////////
    // Create a marker at CEC Office's coordinates
    const marker3 = new mapboxgl.Marker()
      .setLngLat([-73.56440027437311, 45.50111304777613]) // CECC Office's coordinates
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup3 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>CEC Office</h3><p>xxx</p>"
    );
    marker3.setPopup(popup3);

    // Handle marker click to notify parent component
    marker3.getElement().addEventListener("click", () => {
      onMarkerClick("CECOffice"); // Trigger click to open Chapter 2
    });
    //////////////////////////////////////////////////////////////////////////
    // Create a marker at CU Office's coordinates
    const marker4 = new mapboxgl.Marker()
      .setLngLat([-99.11774141796508, 19.430463313105125]) // CU Office's coordinates
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup4 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>Congreso de la Unión</h3><p>xxx</p>"
    );
    marker4.setPopup(popup4);

    // Handle marker click to notify parent component
    marker4.getElement().addEventListener("click", () => {
      onMarkerClick("CU"); // Trigger click to open Chapter 2
    });
    //////////////////////////////////////////////////////////////////////////
    // Create a marker at United State Capitol 's coordinates
    const marker5 = new mapboxgl.Marker()
      .setLngLat([-77.00898612698629, 38.890101740919036]) // CU Office's coordinates
      .addTo(map);

    // Create a popup and attach it to the marker
    const popup5 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h3>United State Capitol</h3><p>xxx</p>"
    );
    marker5.setPopup(popup5);

    // Handle marker click to notify parent component
    marker5.getElement().addEventListener("click", () => {
      onMarkerClick("USC"); // Trigger click to open Chapter 2
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
        width: "100%",
        height: "50vh", // Adjusted height for small screens
        position: "relative"
      }}
    />
  );
});

export default MapComponent;
