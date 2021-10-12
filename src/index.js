import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navigator from "./components/Navigation";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navigator />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
