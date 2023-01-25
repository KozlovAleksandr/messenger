import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./chatListConversation.scss";

interface ChatListConversationProps {
  id: string;
  displayName: string;
  time: string;
  message: string;
  onClick: () => void;
}

export class ChatListConversation extends Block {
  static cName = "ChatListConversation";

  constructor({id, displayName, time, message, onClick}: ChatListConversationProps) {
    super({id, displayName, time, message, events: {click: onClick}});
  }

  protected render(): string {
    return template;
  }
}
