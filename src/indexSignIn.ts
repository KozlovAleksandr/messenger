import { renderDOM, registerComponent }  from "./core";
import { SignIn } from "./pages/signIn/signIn";

import "./styles/app.scss";

import Button from "./components/button";
import Input from "./components/input";
import InputError from "components/inputError";
import ControlledInput from "components/controlledInput";
import Header from "./components/header";
import Footer from "./components/footer";


registerComponent(Button);
registerComponent(Input);
registerComponent(InputError);
registerComponent(ControlledInput);
registerComponent(Header);
registerComponent(Footer);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new SignIn());
});
