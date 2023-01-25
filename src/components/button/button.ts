import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./button.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export class Button extends Block {
  static cName = "Button";

  constructor({title, onClick}: ButtonProps) {
    super({title, events: {click: onClick}});
  }

  protected render(): string {
    return template;
  }
}
