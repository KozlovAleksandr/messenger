import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./form.scss";
import "./settingsPage.scss";



export class SettingsPage extends Block {
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
