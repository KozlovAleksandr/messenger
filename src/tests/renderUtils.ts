/* eslint-disable @typescript-eslint/ban-types */
import { BlockClass, renderDOM, registerComponent, Store } from "../core";
import { defaultState } from "../store";
import * as components from "../components";
import { initRouter } from "../router";
import { MockedHashRouter } from "../tests/MockedHashRouter";
import { sleep } from "../utils/sleep";

type RenderBlockParams<T> = {
  Block: BlockClass<T>;
  props: T;
  state?: Partial<AppState>;
}

export async function renderBlock<T extends Object>({ Block, props, state = defaultState }: RenderBlockParams<T>) {
  Object.values(components).forEach((Component: any) => {
    registerComponent(Component);
  });

  const store = new Store<AppState>({ ...defaultState, ...state });
  const router = new MockedHashRouter();

  window.router = router;
  window.store = store;

  document.body.innerHTML = "<div id='app'></div>";

  renderDOM(new Block(props as T));

  initRouter(router, store);

  await sleep();
}

export async function step(name: string, callback: () => void) {
  await callback();
}
