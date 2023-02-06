import AuthAPI from "../api/auth";
import ChatsAPI from "../api/ChatsApi";
import { UserDTO } from "../api/types";
import apiHasError from "../utils/apiHasError";
import transformUser from "../utils/apiTransformers";
import type { Dispatch } from "../core/Store";

type LoginPayload = {
  login: string;
  password: string;
};

type RegisterPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export const logout = async (dispatch: Dispatch<AppState>) => {
  try {
    dispatch({ isLoading: true });

    await AuthAPI.logout();

    dispatch({ isLoading: false, user: null });
  } catch(err) {
    console.log("logoutError: ", err);
  }
  
  window.router.go("/login");
};

export const login = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: LoginPayload,
) => {
  try {
    dispatch({ isLoading: true });

    const response = await AuthAPI.login(action);

    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      return;
    }

    const responseUser = await AuthAPI.me();

    dispatch({ isLoading: false, loginFormError: null });

    if (apiHasError(response)) {
      dispatch(logout);
      return;
    }
    const responseChats = await ChatsAPI.getChats();
  
    if (apiHasError(responseChats)) {
      console.log(responseChats);
      return;
    }
  
    dispatch({
      isLoading: false,
      loginFormError: null,
      user: transformUser(responseUser as UserDTO),
      chats: responseChats,
    });

  } catch (err) {
    console.log("loginError: ", err);
  }

  window.router.go("/messenger");
};

export const register = async (
  dispatch: Dispatch<AppState>,
  state: AppState, 
  action: RegisterPayload,
) => {

  try {
    dispatch({ isLoading: true });

    const response = await AuthAPI.register(action);
  
    if (apiHasError(response)) {
      dispatch({ isLoading: false, loginFormError: response.reason });
      return;
    }
  
    const responseUser = await AuthAPI.me();
  
    dispatch({
      isLoading: false,
      loginFormError: null,
      user: transformUser(responseUser as UserDTO),
    });
  } catch(err) {
    console.log("registerError: ", err);
  }

  window.router.go("/");
};
