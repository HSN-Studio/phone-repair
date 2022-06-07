import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StepProvider from "./Store/StepProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>
);
