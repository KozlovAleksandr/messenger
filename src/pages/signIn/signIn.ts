import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./form.scss";

export class SignIn extends Block {
  constructor(){
    super();

    this.setProps({
      onButtonClick: () => console.log("btn clck")
    });
  }

  render(): string {
    return template;
  }
}
