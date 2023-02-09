import Block from "../../core/Block";

interface ButtonHeaderChatProps {
  title: string;
  className?: string
  onSubmit: () => void;
  onClick: () => void;
}

export class ButtonHeaderChat extends Block {
  static cName = "ButtonHeaderChat";

  constructor({title, className, onClick, onSubmit}: ButtonHeaderChatProps) {
    super({title, className, events: {click: onClick, submit: onSubmit}});
  }

  protected render(): string {
    return `
    <button class="header-chat__btn">{{ title }}</button>
    `;
  }
}
