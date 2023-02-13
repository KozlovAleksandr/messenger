import {Block, CoreRouter, Store} from "../../core";
import withRouter from "../../utils/withRouter";
import withStore from "../../utils/withStore";
import withChats from "../../utils/withChats";
import { logout } from "../../services/auth";
import { createChat, chooseChat } from "../../services/chats";
import { addUser, deleteChat, deleteUser } from "../../services/chats";
import Messages from "../../services/messages";

type ChatPageProps = {
  router: CoreRouter;
  store: Store<AppState>;
  onNavigate?: () => void;
  onAddUser?:() => void;
  onDeleteChat?:() => void;
  onDeleteUser?:() => void;
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onLogout: (event: Event) => this.onLogout(),
      onAddUser: () => this.onAddUser(),
      onDeleteUser: () => this.onDeleteUser(),
      onCreateChat: () => this.onCreateChat(),
      onDeleteChat: () => this.onDeleteChat(),
      onChooseChat: (event: Event) => this.onChooseChat(event),
      sendMessage: (event: SubmitEvent) => this.sendMessage(event),
    });
  }

  onNavigate() {
    this.props.router.go("/settings");
  }

  onCreateChat() {
    const chatName = prompt("Name your chat");
    if (chatName) {
      this.props.store.dispatch(createChat, { title: chatName });
    }
  }

  onDeleteChat() {
    const chatId = window.store.getState().chatId;
    window.store.dispatch(deleteChat, chatId);
  }

  onChooseChat(event: Event) {
    console.log(event.currentTarget!.id);
    const chatId = event.currentTarget!.id;
    this.props.store.dispatch(chooseChat, chatId); 
  }

  onAddUser() {
    const chatId = window.store.getState().chatId;
    const login = prompt("Enter user name");
    console.log(login, chatId);
    if (login) window.store.dispatch(addUser, { user: login, chatId });
  }

  onDeleteUser() {
    const chatId = window.store.getState().chatId;
    const login = prompt("Enter user name");
    if (login) window.store.dispatch(deleteUser, { user: login, chatId });
  }

  sendMessage(event: SubmitEvent): void {
    event.preventDefault();
    const outgoingMessage = document.querySelector("input[name=\"message\"]");
    if (outgoingMessage && outgoingMessage.value != "") {
      Messages.sendMessage(outgoingMessage.value);
      outgoingMessage.value = "";
    }
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
                {{#if ${window.store.getState().chatId !== null} }}
                  <div class="chat-right__header__title">${window.store.getState().chatTitle != undefined ? window.store.getState().chatTitle : ""}</div>
                  <div class="btns_group">
                    {{{ButtonHeaderChat 
                      title="ADD USER" 
                      onClick=onAddUser
                    }}}
                    {{{ButtonHeaderChat 
                      title="DELETE USER" 
                      onClick=onDeleteUser
                    }}}
                    {{{ButtonHeaderChat 
                      title="DELETE CHAT" 
                      onClick=onDeleteChat
                    }}}
                  </div>
                {{/if}}
              </div>              
              {{{MessagesBox}}}
              {{{InputBox onSubmit=sendMessage}}}
            
          </div>
      </div>
    </div>
    `;
  }
}

export default withRouter(withStore(withChats((Chats))));
