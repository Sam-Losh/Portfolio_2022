import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from './App.js'


ReactDOM.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>,
  document.getElementById("root")
);