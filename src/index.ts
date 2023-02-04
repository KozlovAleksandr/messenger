/* eslint-disable @typescript-eslint/no-explicit-any */
// require('babel-core/register');

import { renderDOM, registerComponent, PathRouter, CoreRouter, Store } from "./core";
import { initApp } from "./services/initApp";
import { defaultState } from "./store";
import { initRouter } from "./router";
import SplashScreen from "./pages/splash";

import "./styles/app.scss";


import * as components from "./components";

Object.values(components).forEach((Component: any) => {
  registerComponent(Component);
});

declare global {
  interface Window {
    store: Store<AppState>;
    router: CoreRouter;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const store = new Store<AppState>(defaultState);
  const router = new PathRouter();

  window.router = router;
  window.store = store;

  renderDOM(new SplashScreen({}));

  initRouter(router, store);

  store.dispatch(initApp);
});
