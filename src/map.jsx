import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import chapters from "./chapterData";

mapboxgl.accessToken = "pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg";

const MapComponent = forwardRef(({ onMarkerClick }, ref) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [lineLayerVisible, setLineLayerVisible] = useState(false);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ikerluna/cm2dk18gv007l01ph2anbepkk",
      center: [-99.1332, 19.4326],
      zoom: 1.2
    });

    mapInstance.current = map;

    chapters.forEach((chapter) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(chapter.coordinates)
        .addTo(map);

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${chapter.name}</h3><p>${chapter.description || "No description available."}</p>`
      );
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
          "line-width": 2
        },
        visibility: "none"
      });
    });

    return () => map.remove();
  }, [onMarkerClick]);

  const toggleLineLayer = () => {
    if (mapInstance.current) {
      const visibility = mapInstance.current.getLayoutProperty("lineLayer", "visibility");
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
        zoom: 10,
        essential: true
      });
    }
  }));

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mapContainer} className="w-100 h-100 position-relative" />
      <button
        onClick={toggleLineLayer}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px",
          background: lineLayerVisible ? "#ff0000" : "#888",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
