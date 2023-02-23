import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Viewerbox from "./components/Viewerbox";
import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Viewerbox />
      <Slider />
    </div>
  );
}

export default App;
