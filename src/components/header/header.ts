import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./header.scss";

export class Header extends Block {
  constructor(){
    super();

  }

  render(): string {
    return template;
  }
}
