import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./footer.scss";

export class Footer extends Block {
  constructor(){
    super();

  }

  render(): string {
    return template;
  }
}
