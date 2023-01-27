import { CoreRouter, Store, renderDOM } from "core";
import { getScreenComponent, Screens } from "./utils";

const routes = [
  {
    path: "/login",
    block: Screens.SignIn,
    shouldAuthorized: false,
  },
  {
    path: "/sign-up",
    block: Screens.SignUp,
    shouldAuthorized: false,
  },
  {
    path: "/messenger",
    block: Screens.Chat,
    shouldAuthorized: true,
  },
  {
    path: "/settings",
    block: Screens.SettingsPage,
    shouldAuthorized: true,
  },
  {
    path: "*",
    block: Screens.SignIn,
    shouldAuthorized: false,
  },
];

export function initRouter(router: CoreRouter, store: Store<AppState>) {
  routes.forEach(route => {
    router.use(route.path, () => {
      const isAuthorized = Boolean(store.getState().user);
      const currentScreen = Boolean(store.getState().screen);
      
      
      if (isAuthorized || !route.shouldAuthorized) {
        store.dispatch({ screen: route.block });
        return;
      }

      if (!currentScreen) {
        store.dispatch({ screen: Screens.SignIn });
      }
    });
  });

  /**
   * Глобальный слушатель изменений в сторе
   * для переключения активного экрана
   */
  store.on("changed", (prevState, nextState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start();
    }
    
    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM(new Page({}));
      document.title = `Messanger / ${Page.componentName}`;
    }
  });
}
