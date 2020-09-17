import React from "react";
import "./App.css";

import MapComponent from "./Components/MapComponent";
const App = () => {
  return (
    <div>
      <MapComponent zoom={4} center={{ lat: 0, lng: 0 }} id="MyMapComponent" />
    </div>
  );
};

export default App;
