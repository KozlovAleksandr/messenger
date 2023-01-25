import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./buttonChatList.scss";

interface ButtonChatListProps {
  title: string;
  className?: string
  onSubmit: () => void;
  onClick: () => void;
}

export class ButtonChatList extends Block {
  static cName = "ButtonChatList";

  constructor({title, className, onClick, onSubmit}: ButtonChatListProps) {
    super({title, className, events: {click: onClick, submit: onSubmit}});
  }

  protected render(): string {
    return template;
  }
}
