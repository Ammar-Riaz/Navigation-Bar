import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
