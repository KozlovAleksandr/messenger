import { renderDOM, registerComponent }  from "./core";
import { Chat } from "./pages/chat/chat";

import "./styles/app.scss";

import ChatListConversation from "./components/chatListConversation";
import MessagesBox from "./components/messagesBox";
import InputBox from "./components/inputBox";

registerComponent(ChatListConversation);
registerComponent(MessagesBox);
registerComponent(InputBox);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Chat());
});
