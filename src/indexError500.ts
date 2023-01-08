import { renderDOM, registerComponent }  from "./core";
import { Error5Page } from "./pages/error5/error5Page";

import "./styles/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Error5Page());
});
