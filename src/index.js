import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import Weather from "./Weather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Weather defaultCity="New York" />
  </React.StrictMode>
);

reportWebVitals();
