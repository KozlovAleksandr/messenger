/* eslint-disable @typescript-eslint/no-explicit-any */
import SignIn from "../pages/signIn/signIn";
import SignUp from "../pages/signUp/signUp";
import Chat from "../pages/chat/chat";
import SettingsPage from "../pages/settingsPage/settingsPage";
import { BlockClass } from "../core";

export enum Screens {
  SignIn = "login",
  SignUp = "sign-up",
  Chat = "messenger",
  SettingsPage = "settings",
}

const map: Record<Screens, BlockClass<any>> = {
  [Screens.SignIn]: SignIn,
  [Screens.SignUp]: SignUp,
  [Screens.Chat]: Chat,
  [Screens.SettingsPage]: SettingsPage,
};

export const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};
