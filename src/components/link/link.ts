import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./link.scss";

interface LinkProps {
  title: string;
  onClick: () => void;

}

export class Link extends Block {
  static cName = "Link";

  constructor({title, onClick}: LinkProps) {
    super({title, events: {click: onClick} });
  }

  protected render(): string {
    return template;
  }
}
