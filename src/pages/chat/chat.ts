import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./chat.scss";

export class Chat extends Block {
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
