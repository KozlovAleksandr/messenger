import Block from "../../core/Block";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export class Button extends Block {
  static cName = "Button";

  constructor({title, onClick}: ButtonProps) {
    super({title, events: {click: onClick}});
  }

  protected render(): string {
    return `
    <button class="form-btn__btn">{{ title }}</button>
    `;
  }
}
