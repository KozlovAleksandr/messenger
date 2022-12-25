import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./input.scss";

interface InputProps {
  title: string;
  type?: "text" | "password" | "email";
  name: string;
  onChange?: () => void;
}

export class Input extends Block {
  constructor({title, type, name, onChange = () => {console.log("1");}}: InputProps) {
    super({title, type, name, events: {input: onChange}});
  }

  protected render(): string {
    return template;
  }
}
