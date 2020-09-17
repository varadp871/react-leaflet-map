import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import LocateUser from "./LocateUser";

const MapComponent = (props) => {
  const [markers, setMarkers] = useState(props.center);
  const [latValue, setLatValue] = useState();
  const [lonValue, setLonValue] = useState();

  const addMarker = (e) => {
    setMarkers(e.latlng);
    console.log(e.latlng);
    setLatValue(e.latlng.lat);
    console.log(e.latlng.lat);
    setLonValue(e.latlng.lng);
    console.log(e.latlng.lng);
  };

  const locateOptions = {
    position: "topright",
    onActivate: () => {}, // callback before engine starts retrieving locations
  };

  return (
    <div className="container">
      <Map center={props.center} zoom={props.zoom} onClick={addMarker}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markers} />
        <LocateUser options={locateOptions} startDirectly />
      </Map>
      <div className="container my-4">
        <div className="form-group">
          <label>Latitude</label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            value={latValue}
            onChange={setLatValue}
          />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input
            type="text"
            className="form-control"
            value={lonValue}
            onChange={setLonValue}
          />
        </div>
      </div>
    </div>
  );
};
export default MapComponent;
