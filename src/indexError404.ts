import { renderDOM, registerComponent }  from "./core";
import { Error4Page } from "./pages/error4/error4Page";

import "./styles/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Error4Page());
});
