import Block from "../../core/Block";
import inputArrow from "../../asserts/inputArrow.svg"
import template from "bundle-text:./template.hbs";

import "./inputBox.scss";

interface InputBoxProps {
  onSubmit?: () => void;
}

export class InputBox extends Block {
  static cName = "InputBox";

  constructor({ onSubmit }: InputBoxProps) {
    super({
      events: {
        submit: onSubmit,
      },
    });

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
    return `
    <form class="chat-right__input-box">
      <!-- <img class="clip" src="../../asserts/clip.svg" alt="clip"> -->
      <button type="submit">ADD</button>
      <input type="text" name="message" placeholder="Message...">
      <button type="submit">SEND</button>
      <!-- <img class="inputArrow" src="../../asserts/inputArrow.svg" alt="inputArrow"> -->
    </form>
    `;
  }
}
