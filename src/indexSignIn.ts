import { renderDOM, registerComponent }  from "./core";
import { SignIn } from "./pages/signIn/signIn";

import "./styles/app.scss";

import Button from "./components/button";
import Input from "./components/input";
import InputError from "components/inputError";
import ControlledInput from "components/controlledInput";


registerComponent(Button);
registerComponent(Input);
registerComponent(InputError);
registerComponent(ControlledInput);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new SignIn());
});
