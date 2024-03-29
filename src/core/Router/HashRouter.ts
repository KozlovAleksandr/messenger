import { CoreRouter } from "./CoreRouter";

export class HashRouter implements CoreRouter {
  // eslint-disable-next-line @typescript-eslint/ban-types
  private routes: Record<string, Function> = {};

  private isStarted = false;

  start() {
    if (!this.isStarted) {
      this.isStarted = true;
      window.addEventListener("hashchange", () => this.onRouteChange());
      this.onRouteChange();
    }
  }

  onRouteChange() {
    const { hash } = window.location;

    const found = Object.entries(this.routes).some(([routeHash, callback]) => {
      if (routeHash === hash) {
        callback();
        return true;
      }
      return false;
    });

    if (!found && this.routes["*"]) {
      this.routes["*"]();
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  use(hash: string, callback: Function) {
    this.routes[hash] = callback;
    return this;
  }

  go(hash: string) {
    window.location.hash = hash;
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }
}
