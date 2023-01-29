class Block {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getContent() {}
    
    show() {
      console.log("show");
    }
    
    hide() {
      console.log("hide");
    }
  }
  
  class Chats extends Block {
    getContent() {
      return "chats";
    }
    
    show() {
      console.log("show chats");
    }
    
    hide() {
      console.log("hide chats");
    }
  }
  
  class Users extends Block {
    getContent() {
      return "users";
    }
    
    show() {
      console.log("show users");
    }
    
    hide() {
      console.log("hide users");
    }
  }
  
  function isEqual(lhs: any, rhs: any) {
    return lhs === rhs;
  }
  
  function render(query: any, block: any) {
    const root = document.querySelector(query);
    root.textContent = block.getContent();
    return root;
  }
  
  class Route {
      _pathname: any;
      _blockClass: any;
      _block: any;
      _props: any;
  
      constructor(pathname: any, view: any, props: { rootQuery: any; }) {
          this._pathname = pathname;
          this._blockClass = view;
          this._block = null;
          this._props = props;
      }
  
      navigate(pathname: any) {
          if (this.match(pathname)) {
              this._pathname = pathname;
              this.render();
          }
      }
  
      leave() {
          if (this._block) {
              this._block.hide();
          }
      }
  
      match(pathname: any) {
          return isEqual(pathname, this._pathname);
      }
  
      render() {
          if (!this._block) {
              this._block = new this._blockClass();
              render(this._props.rootQuery, this._block);
              return;
          }
  
          this._block.show();
      }
  }
  
  class Router {
      routes: any;
      history: any;
      _currentRoute: any;
      _rootQuery: any;
  
      static __instance: any;
  
      constructor(rootQuery: string) {
          if (Router.__instance) {
              return Router.__instance;
          }
  
          this.routes = [];
          this.history = window.history;
          this._currentRoute = null;
          this._rootQuery = rootQuery;
  
          Router.__instance = this;
      }
  
      use(pathname: string, block: typeof Chats) {
          const route = new Route(pathname, block, {rootQuery: this._rootQuery});
          this.routes.push(route);
        return this;
      }
  
      start() {
        window.onpopstate = event => {
        this._onRoute(event.currentTarget.location.pathname);
          };
  
        this._onRoute(window.location.pathname);
      }
  
      _onRoute(pathname: string) {
          const route = this.getRoute(pathname);
  
          if (this._currentRoute && this._currentRoute !== route) {
              this._currentRoute.leave();
          }
          this._currentRoute = route;
          route.render(route, pathname);
      }
  
      go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
      }
  
      back() {
        this.history.back();
        // this.go(window.location.pathname);
      }
  
      forward() {
        this.history.forward();
        // this.go(window.location.pathname);
      }
  
      getRoute(pathname: string) {
          return this.routes.find((route: string) => route.match(pathname));
      }
  }
  
  history.pushState({}, "", "/");
  
  const router = new Router(".app");
  
  router
    .use("/", Chats)
    .use("/users", Users)
    .start();
  
  setTimeout(() => {
    router.go("/users");
  }, 1000);
  
  setTimeout(() => {
    router.back();
  }, 3000);
  
  setTimeout(() => {
    router.forward();
  }, 5000);
