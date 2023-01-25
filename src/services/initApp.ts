import authAPI from "../api/auth";

import { UserDTO } from "api/types";
import type { Dispatch } from "core";

import transformUser from "../utils/apiTransformers";
import apiHasError from "../utils/apiHasError";


export async function initApp(dispatch: Dispatch<AppState>) {

  // Ручкая задержка для демонстрации загрузочного экрана
  await new Promise(r => setTimeout(r, 700));

  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      return;
    }

    dispatch({ user: transformUser(response as UserDTO) });
  } catch (err) {
    // console.error(err);
  } finally {
    dispatch({ appIsInited: true });
  }
}
