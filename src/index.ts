import { renderDOM, registerComponent }  from "./core";
import { Error5Page } from "./pages/error5/error5Page";
import { Error4Page } from "./pages/error4/error4Page";
import { Chat } from "./pages/chat/chat";
import { SignIn } from "./pages/signIn/signIn";
import { SignUp } from "./pages/signUp/signUp";
import { SettingsPage } from "./pages/settingsPage/settingsPage";



import "./styles/app.scss";

import Button from "./components/button";
import Link from "./components/link";
import Input from "./components/input";
import Layout from "./components/layout";

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new SettingsPage());
});
