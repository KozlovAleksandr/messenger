import Block from "core/Block";

import "./inputError.scss";

interface InputErrorProps {
  text?: string;
}

export class InputError extends Block {
  static cName = "InputError";

  constructor({text}: InputErrorProps) {
    super({text});
  }
  

  protected render(): string {
    return `
      <div class="input-error">{{#if text}}{{text}}{{/if}}</div>
    `;
  }
}
