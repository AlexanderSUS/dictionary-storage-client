import api from 'api';
import { AxiosResponse } from 'axios';
import { ApiEnpoint } from 'const/api';
import { AuthUserData } from 'types/api';

export default class AuthServise {
  static signIn(userData: AuthUserData): Promise<AxiosResponse<String>> {
    return api.post(`${ApiEnpoint.auth}/${ApiEnpoint.signup}`, userData);
  }

  static logIn(userData: AuthUserData): Promise<AxiosResponse<String>> {
    return api.post(`${ApiEnpoint.auth}/${ApiEnpoint.login}`, userData);
  }
}
