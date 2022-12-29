import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./input.scss";

interface InputProps {
  type?: "text" | "password" | "email";
  name: string;
  value?: string;
  error?: string
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;

}

export class Input extends Block {
  constructor({onInput, ...props}: InputProps) {
    super({...props, events: {input: onInput}});
  }

  protected render(): string {
    return template;
  }
}
