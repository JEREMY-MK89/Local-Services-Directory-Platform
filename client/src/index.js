import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // Import your Tailwind CSS styles
import App from "./components/App"; 
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
