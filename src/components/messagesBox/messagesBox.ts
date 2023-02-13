import Block from "../../core/Block";
import withStore from "../../utils/withStore";

interface MessagesBoxProps {
  name: string;
  users: string;
}

export class MessagesBox extends Block {
  static cName = "MessagesBox";

  static chatUsers: Array<User>;
  
  constructor({name, users}: MessagesBoxProps) {
    super({name, users});
  
    this.setProps({

    });

    MessagesBox.chatUsers = window.store.getState().users;
  }

  protected render(): string {
    return `
    <div class="chat-right__messages-box">
      {{#if ${window.store.getState().user !== null} }}  
        ${window.store.getState().messages?.map(el => `
          {{#if ${window.store.getState().user?.id === el.user_id} }}
            <div class="message my-message">
              <p>${el.content}<span>${el.time}</span> </p>
            </div>
          {{else}}
            <div class="message companion-message">
              <p>${el.content}<span>${el.time}</span> </p>
            </div>
          {{/if}}
          `).join("")}
        {{/if}}
    </div>
    `;
  }
}

export default withStore(MessagesBox);
