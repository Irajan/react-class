import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Welcome name="Binita" />
    <Welcome name="Dipika" />
    <Welcome name="Anita" />
  </React.StrictMode>,
  document.getElementById("root")
);
