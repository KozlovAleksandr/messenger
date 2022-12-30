import { renderDOM, registerComponent }  from "./core";
import { Error4Page } from "./pages/error4/error4Page";

import "./styles/app.scss";

import Header from "./components/header";
import Footer from "./components/footer";

registerComponent(Header);
registerComponent(Footer);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Error4Page());
});
