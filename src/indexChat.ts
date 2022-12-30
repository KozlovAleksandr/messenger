import { renderDOM, registerComponent }  from "./core";
import { Chat } from "./pages/chat/chat";

import "./styles/app.scss";

import ChatListConversation from "./components/chatListConversation";
import MessagesBox from "./components/messagesBox";
import InputBox from "./components/inputBox";
import Header from "./components/header";
import Footer from "./components/footer";

registerComponent(ChatListConversation);
registerComponent(MessagesBox);
registerComponent(InputBox);
registerComponent(Header);
registerComponent(Footer);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Chat());
});
