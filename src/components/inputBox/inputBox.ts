import Block from "../../core/Block";
import inputArrow from "../../asserts/inputArrow.svg"
import template from "bundle-text:./template.hbs";

import "./inputBox.scss";

export class InputBox extends Block {
  static cName = "InputBox";

  constructor() {
    super();

      this.setProps({
        error: "",
        message: "",
        onButtonClick: () => this.onButtonClick(),
      });
    }

  onButtonClick () : void {
    const messageEl = this._element?.querySelector("input[name='message']") as HTMLInputElement;
    console.log(messageEl.value);
    if (messageEl.value.length === 0) {
      console.log("message is empty");
    }
  }

  protected render(): string {
    return template;
  }
}
