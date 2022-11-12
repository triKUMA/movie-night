import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./managers/FirebaseManager";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <FirebaseContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext>
  </React.StrictMode>
);
