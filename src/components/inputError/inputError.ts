import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./inputError.scss";

interface InputErrorProps {
  text?: string;
}

export class InputError extends Block {
  constructor({text}: InputErrorProps) {
    super({text});
  }
  

  protected render(): string {
    return template;
  }
}
