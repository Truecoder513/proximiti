import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = ({ gpsCoordinates, height, mapInfo }) => {
  return (
    <div className="map-container" style={{ height: height }}>
      <MapContainer center={gpsCoordinates} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={gpsCoordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="mapInfo">
        <h5>Information d'accès</h5>
        {mapInfo}
      </div>
    </div>
  );
};

export default MyMap;
