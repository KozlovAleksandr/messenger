import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./messagesBox.scss";



export class MessagesBox extends Block {


  protected render(): string {
    return template;
  }
}
