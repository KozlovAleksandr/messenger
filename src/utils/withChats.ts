function withChats(WrappedBlock) {
  return class extends WrappedBlock {
    public static componentName = WrappedBlock.componentName || WrappedBlock.cName;

    constructor(props: any) {
      super({ ...props, chats: window.store.getState().chats });
    }

    __onChangeUserCallback = (prevState: AppState, nextState: AppState) => {
      console.log("1")
      if (JSON.stringify(prevState.chats) !== JSON.stringify(nextState.chats)) {
        this.setProps({ ...this.props, chats: nextState.chats });
      }
    };

    componentDidMount(props: any) {
      console.log("2")
      super.componentDidMount(props);
      window.store.on("changed", this.__onChangeUserCallback);
    }

    componentWillUnmount() {
      console.log("3")
      super.componentWillUnmount();
      window.store.off("changed", this.__onChangeUserCallback);
    }
  };
}

export default withChats;
