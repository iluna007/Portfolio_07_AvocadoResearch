import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import chapters from "./chapterData";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg";

const MapComponent = forwardRef(({ onMarkerClick }, ref) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [lineLayerVisible, setLineLayerVisible] = useState(false);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ikerluna/cm2tj3yg100gh01pm3h66dwks",
      center: [-99.1332, 19.4326],
      zoom: 1.2
    });

    mapInstance.current = map;

    // Add markers dynamically
    chapters.forEach((chapter) => {
      // Create a custom yellow marker element
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.backgroundColor = "white";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid black";

      const marker = new mapboxgl.Marker(el)
        .setLngLat(chapter.coordinates)
        .addTo(map);
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="max-width: 250px; overflow-y: auto; padding: 10px; color: black;">
            <h3 style="margin-bottom: 10px; font-size: 14px;">${
              chapter.name
            }</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 5px; max-height: 150px; overflow-y: auto;">
              ${chapter.logo
                .map(
                  (logo) =>
                    `<img src="${logo}" alt="Logo" style="width: 40px; height: 40px; object-fit: contain;" />`
                )
                .join("")}
            </div>
          </div>
        `);

      marker.setPopup(popup);

      marker.getElement().addEventListener("click", () => {
        onMarkerClick(chapter.name);
      });
    });

    const lineCoordinates = chapters.map((chapter) => chapter.coordinates);
    const line = turf.lineString(lineCoordinates);

    map.on("load", () => {
      map.addSource("line", {
        type: "geojson",
        data: line
      });

      map.addLayer({
        id: "lineLayer",
        type: "line",
        source: "line",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#ff0000",
          "line-width": 2,
          "line-dasharray": [1, 2] // Creates a dotted line (1px dash, 2px gap)
        },
        visibility: "none"
      });
    });

    return () => map.remove();
  }, [onMarkerClick]);

  const toggleLineLayer = () => {
    if (mapInstance.current) {
      const visibility = mapInstance.current.getLayoutProperty(
        "lineLayer",
        "visibility"
      );
      mapInstance.current.setLayoutProperty(
        "lineLayer",
        "visibility",
        visibility === "visible" ? "none" : "visible"
      );
      setLineLayerVisible(!lineLayerVisible);
    }
  };

  useImperativeHandle(ref, () => ({
    flyToLocation: (coordinates) => {
      mapInstance.current.flyTo({
        center: coordinates,
        zoom: 16,
        essential: true
      });
    }
  }));

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mapContainer} className="w-100 h-100 position-relative" />
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px",
          background: "#888",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "default"
        }}
      >
        Legal and Bureaucratic Architecture of Avocado Industry
      </button>
    </div>
  );
});

export default MapComponent;
