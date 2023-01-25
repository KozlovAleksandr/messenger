import { BlockClass, CoreRouter } from "core";

type WithRouterProps = { router: CoreRouter }

export function withRouter<P extends WithRouterProps>(WrappedBlock: any) {
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  };
}

export default withRouter;
