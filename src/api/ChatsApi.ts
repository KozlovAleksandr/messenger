import HTTPTransport from "../utils/HTTPTransport";

type CreateChatRequestData = {
  title: string;
};

type DeleteChatRequestData = {
  chatId: number;
};

type UserRequestData = {
  users: Array<number>,
  chatId: string
};

export class ChatsAPI {
  apiInstance: HTTPTransport;

  constructor() {
    this.apiInstance = new HTTPTransport();
  }

  getChats() {
    return this.apiInstance.get("chats");

  }

  createChat(data: CreateChatRequestData) {
    console.log("data", data);
    return this.apiInstance.post("chats", { data });
  }

  deleteChat(data: DeleteChatRequestData) {
    return this.apiInstance.delete("chats", { data });
  }

  addUser(data: UserRequestData) {
    return this.apiInstance.put("chats/users", { data });
  }

  getChatUsers(id: string) {
    return this.apiInstance.get(`chats/${id}/users`);
  }

  getToken(chatId: string) {
    return this.apiInstance.post(`chats/token/${chatId}`);
  }

  deleteUser(data: UserRequestData) {
    return this.apiInstance.delete("chats/users", { data });
  }
}

export default new ChatsAPI();
