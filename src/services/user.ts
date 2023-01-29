import UserAPI from "../api/UserApi";
import { UserDTO } from "../api/types";
import apiHasError from "../utils/apiHasError";
import transformUser from "../utils/apiTransformers";
import type { Dispatch } from "core";

type DataPayload = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

type PasswordPayload = {
  oldPassword: string;
  newPassword: string;
};

export const changeData = async (
  dispatch: Dispatch<AppState>,
  action: DataPayload,
) => {
  dispatch({ isLoading: true });

  const response = await UserAPI.putData(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await UserAPI.getUser(response.id);
  
  dispatch({
    isLoading: false,
    loginFormError: null,
    user: transformUser(responseUser as UserDTO),
  });
};

export const changePassword = async (
  dispatch: Dispatch<AppState>,
  action: PasswordPayload,
) => {
  dispatch({ isLoading: true });

  const response = await UserAPI.putPassword(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  dispatch({ isLoading: false, loginFormError: null });
};

export const changeAvatar = async (
  dispatch: Dispatch<AppState>,
  action,
) => {
  dispatch({ isLoading: true });

  const response = await UserAPI.putAvatar(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }
  const responseUser = await UserAPI.getUser(response.id);

  dispatch({
    isLoading: false,
    loginFormError: null,
    user: transformUser(responseUser as UserDTO),
  });
};
