import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./input.scss";

interface InputProps {
  type?: "text" | "password" | "email";
  name: string;
  value?: string;
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class Input extends Block {
  static cName = "Input";

  constructor({onInput, onFocus, onBlur, ...props}: InputProps) {
    super({...props, events: {input: onInput, focus: onFocus, blur: onBlur}});
  }

  protected render(): string {
    // return template;
    return `
      <input type="{{type}}" name="{{name}}" value="{{value}}" class="form-input__input">
    `;
  }
}
