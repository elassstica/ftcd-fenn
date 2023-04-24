import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/Basteleur-Bold.otf";
import "./fonts/UniversOblique.ttf";
import "./fonts/Riposte-Light.otf";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
) ;
