import { HashRouter } from "../core/Router/HashRouter";

export class MockedHashRouter extends HashRouter {
  go(hash: string) {
    window.location.hash = hash;
    this.onRouteChange();
  }
}
