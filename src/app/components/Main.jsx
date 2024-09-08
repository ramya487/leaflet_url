"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import shp from "shpjs";
import "leaflet/dist/leaflet.css";

export default function Home() {
  const [geoJsonData, setGeoJsonData] = useState(null);

  const loadShapefile = async (url) => {
    try {
      const geojson = await shp(url);
      setGeoJsonData(geojson);
    } catch (error) {
      console.error("Error fetching shapefile:", error);
    }
  };

  const geoJsonStyle = {
    color: "blue",
    weight: 2,
    fillColor: "lightblue",
    fillOpacity: 0.5,
  };

  return (
    <>
      <button
        className="m-5 bg-slate-700 px-4 text-sm py-3 rounded-md hover:bg-slate-300 text-white hover:text-black"
        onClick={() => loadShapefile(process.env.NEXT_PUBLIC_ZIPFILE_URL)}
      >
        Fetch shapefile
      </button>
      <MapContainer
        center={[37.8, -96]}
        zoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoJsonData && <GeoJSON data={geoJsonData} style={geoJsonStyle} />}
      </MapContainer>
    </>
  );
}
