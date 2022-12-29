import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./chatListConversation.scss";

interface ChatListConversationProps {
  displayName: string;
  time: string;
  message: string;
}

export class ChatListConversation extends Block {
  constructor({displayName, time, message}: ChatListConversationProps) {
    super({displayName, time, message});
  }

  protected render(): string {
    return template;
  }
}
