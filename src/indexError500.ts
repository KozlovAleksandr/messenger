import { renderDOM, registerComponent }  from "./core";
import { Error5Page } from "./pages/error5/error5Page";

import "./styles/app.scss";

import Header from "./components/header";
import Footer from "./components/footer";

registerComponent(Header);
registerComponent(Footer);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Error5Page());
});
