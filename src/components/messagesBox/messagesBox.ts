import Block from "../../core/Block";
import withStore from "../../utils/withStore";
import formatDate from 'utils/helpers/formatDate';
import { addUser, deleteChat, deleteUser } from 'services/chats';

import template from "bundle-text:./template.hbs";

import "./messagesBox.scss";

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
    return template;
  }
}

export default withStore(MessagesBox);
