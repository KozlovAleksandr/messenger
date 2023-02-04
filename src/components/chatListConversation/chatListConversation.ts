import Block from "../../core/Block";

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
    return `
    <div class="conversation" id={{id}}>
      <div class="conversation__avatar">
          <div class="avatar"></div>
      </div>
      <div class="conversation__datails">
          <div class="conversation__datails-top">
              <p>{{ displayName }}</p>
              <p class="time">{{ time }}</p>
          </div>
          <div class="conversation__datails-bottom">
              <p> {{ message }}</p>
          </div>
      </div>
    </div>
    `;
  }
}
