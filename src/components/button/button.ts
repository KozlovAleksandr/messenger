import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./button.scss";

interface ButtonProps {
  title: string;
  link: string;
  link_name: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({title, link, link_name,  onClick}: ButtonProps) {
    super({title, link, link_name, events: {click: onClick}});
  }

  protected render(): string {
    return template;
  }
}
