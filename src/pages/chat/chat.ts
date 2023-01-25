import {Block, CoreRouter, Store} from "core";
import withRouter from "../../utils/withRouter";
import withStore from "../../utils/withStore";
import withChats from "../../utils/withChats";
import { logout } from "../../services/auth";
import { createChat, chooseChat } from "../../services/chats";
import Messages from "../../services/messages";

import template from "bundle-text:./template.hbs";

import "./chat.scss";

type ChatPageProps = {
  router: CoreRouter;
  store: Store<AppState>;
  onNavigate?: () => void;
  onLogout?:() => void;
  onCreateChat?: () => void;
  onChooseChat?:() => void;
};

class Chats extends Block {
  static componentName = "Chats";

  constructor(props: ChatPageProps){
    super({
      ...props
    });

    this.setProps({
      onNavigate: () => this.onNavigate(),
      onLogout: (event: Event) => this.onLogout(),
      onCreateChat: () => this.onCreateChat(),
      onChooseChat: (event: Event) => this.onChooseChat(event),
    });
  }

  onNavigate() {
    this.props.router.go("/settings");
  }

  onCreateChat() {
    const date = new Date().toLocaleDateString();
    this.props.store.dispatch(createChat, { title: date });
  }

  onChooseChat(event: Event) {
    console.log(event.currentTarget!.id);
    const chatId = event.currentTarget!.id;
    this.props.store.dispatch(chooseChat, chatId); 
  }

  onLogout() {
    this.props.store.dispatch(logout);
  }

  render() {
    return `
    <div class="container">
      <div class="chat container">
          <div class="chat-left">
              <div class="chat-left__header">
                  <div class="chat-left__search">
                    {{{LinkSettings 
                      title="SETTINGS" 
                      onClick=onNavigate
                    }}}
                    <div>
                        <input type="text">
                    </div>
                  </div>
              </div>
              <div class="chat-left__chatlist">
                  {{#if ${!!this.props.chats} }}
                    ${this.props.chats?.map((el: Chat) => `
                      {{{ChatListConversation
                        id='${el.id}'
                        displayName='${el.title}' 
                        message='${el.last_message !== null ? el.last_message.content : "Нет сообщений"}'
                        time="14:27"
                        onClick=onChooseChat
                      }}}
                    `)}
                  {{/if}}
              </div> 
              {{{ ButtonChatList 
                title="create chat"
              onClick=onCreateChat
              }}}
              {{{ButtonChatList 
                title="LOGOUT" 
                onClick=onLogout
              }}}
          </div>
          <div class="chat-right">
              <div class="chat-right__header">
              </div>
              {{{MessagesBox}}}
              {{{InputBox}}}
          </div>
      </div>
    </div>
    `;
  }
}

export default withRouter(withStore(withChats((Chats))));
