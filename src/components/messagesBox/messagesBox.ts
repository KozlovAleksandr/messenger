import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./messagesBox.scss";



export class MessagesBox extends Block {
  static cName = "MessagesBox";

  protected render(): string {
    return template;
  }
}
