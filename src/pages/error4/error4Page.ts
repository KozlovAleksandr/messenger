import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./error.scss";

export class Error4Page extends Block {
  constructor(){
    super();

    this.setProps({
      onButtonClick: () => console.log("btn clck")
    });
  }

  render() {
    return template;
  }
}
