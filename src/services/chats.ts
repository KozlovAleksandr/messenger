import ChatsAPI from "../api/ChatsApi";
import UserAPI from "../api/ChatsApi";
import apiHasError from "../utils/apiHasError";
import type { Dispatch } from "core";
import Messages from "../services/messages";

type CreateChatPayload = {
  title: string;
};

type DeleteChatPayload = {
  chatId: string;
};

type UserPayload = {
  user: string;
  chatId: string;
};

export const createChat = async (
  dispatch: Dispatch<AppState>,
  state: AppState, 
  action: CreateChatPayload
  ) => {
    try {
      dispatch({ isLoading: true });

      const response = await ChatsAPI.createChat(action);
    
      if (apiHasError(response)) {
        dispatch({ isLoading: false, loginFormError: response.reason });
        return;
      }
    
      const responseChats = await ChatsAPI.getChats();
    
      dispatch({
        isLoading: false,
        loginFormError: null,
        chats: responseChats,
      });
    } catch(err) {
      console.log("createChatError: ", err);
    }

};

export const chooseChat = async (
  dispatch: Dispatch<AppState>,
  state: AppState,  
  action: string,
) => {
  try {
    dispatch({ isLoading: true });

    const responseChats = await ChatsAPI.getChatUsers(action);
  
    const responseToken = await ChatsAPI.getToken(action);
  
    await Messages.connect(Number(action), responseToken.token, "0");
  
    const chat = window.store.getState().chats?.filter(el => el.id.toString() === action);
  
    dispatch({
      isLoading: false,
      loginFormError: null,
      chatId: action,
      chatTitle: chat[0]!.title,
      users: responseChats,
    });
  } catch (err) {
    console.log("chooseChatError: ", err);
  }

};

export const deleteChat = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: DeleteChatPayload,
) => {
  try {
    dispatch({ isLoading: true });

    const response = await ChatsAPI.deleteChat({ chatId: Number(action) });
  
    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      return;
    }
  
    Messages.close();
  
    const responseChats = await ChatsAPI.getChats();
  
    dispatch({
      isLoading: false,
      loginFormError: null,
      chatId: null,
      chats: responseChats,
    });
  } catch(err) {
    console.log("deleteChatError: ", err);
  }

};

export const addUser = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action:UserPayload,
) => {
  try {
    dispatch({ isLoading: true });

    const user = await UserAPI.search({ login: action.user });
  
    const response = await ChatsAPI.addUser({ users: [user[0].id], chatId: action.chatId });
  
    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      return;
    }
  
    const responseUsers = await ChatsAPI.getChatUsers(action.chatId);
  
    dispatch({
      isLoading: false,
      loginFormError: null,
      users: responseUsers,
    });
  } catch(err) {
    console.log("addUserError: ", err);
  }
};

export const deleteUser = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: UserPayload,
) => {
  try {
    dispatch({ isLoading: true });

    const user = await UserAPI.search({ login: action.user });
  
    const response = await ChatsAPI.deleteUser({ users: [user[0].id], chatId: action.chatId });
  
    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      return;
    }
  
    const responseUsers = await ChatsAPI.getChatUsers(action.chatId);
  
    dispatch({
      isLoading: false,
      loginFormError: null,
      users: responseUsers,
    });
  } catch(err) {
    console.log("deleteUserError: ", err);
  }
};
