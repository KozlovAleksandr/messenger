/* eslint-disable @typescript-eslint/no-explicit-any */
import HTTPTransport from "../utils/HTTPTransport";

type ProfileRequestData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

type PasswordRequestData = {
  oldPassword: string;
  newPassword: string;
};

type SearchRequestData = {
  login: string;
};

export class UserAPI {
  apiInstance: HTTPTransport;

  constructor() {
    this.apiInstance = new HTTPTransport();
  }

  putData(data: ProfileRequestData) {
    return this.apiInstance.put("user/profile", { data });
  }

  putAvatar(data: any) {
    return this.apiInstance.put("user/profile/avatar", { data, isFormData: true });
  }

  putPassword(data: PasswordRequestData) {
    return this.apiInstance.put("user/password", { data });
  }

  getUser(id: number) {
    return this.apiInstance.get(`user/${id}`);
  }

  search(data: SearchRequestData) {
    return this.apiInstance.post("user/search", { data });
  }
}

export default new UserAPI();
