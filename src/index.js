import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/layout/App";

render(
  <Route>
    <App></App>
  </Route>,
  document.getElementById("app")
);
