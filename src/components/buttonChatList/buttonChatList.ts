import Block from "../../core/Block";

interface ButtonChatListProps {
  title: string;
  className?: string
  onSubmit: () => void;
  onClick: () => void;
}

export class ButtonChatList extends Block {
  static cName = "ButtonChatList";

  constructor({title, className, onClick, onSubmit}: ButtonChatListProps) {
    super({title, className, events: {click: onClick, submit: onSubmit}});
  }

  protected render(): string {
    return `
    <button class="chat-list__btn {{className}}">{{ title }}</button>
    `;
  }
}
