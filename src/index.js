import React from "react";
import ReactDOM from "react-dom/client";
import AuthContextProvider from "./context/AuthContext";
import "./css/style.css";
import "./css/normalize.css";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
