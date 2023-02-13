import { PathRouter } from "./PathRouter";

describe("PathRouter", () => {
  it("should change history state", () => {
    const router = new PathRouter();
    const history = global.window.history;

    router.go("/messenger");
    expect(history.length).toEqual(2);

    router.go("/login");
    expect(history.length).toEqual(3);
  });
});
