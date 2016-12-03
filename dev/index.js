import { render } from "react-dom"
import React from "react";
require("./main.scss");

import App from "./app/app.js";

const containerEl = document.getElementById("app");

render(
  <App/>,
  containerEl
);
