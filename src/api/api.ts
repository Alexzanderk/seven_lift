import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { axiosConfig } from './config';
import { LoginResponse, GetDoorsListResponse } from './api.types';

interface IApi {
  login(login: string, pass: string): Promise<AxiosResponse<any>>;
  getDoors(token: string): Promise<AxiosResponse<any>>;
}

export interface IAxiosConfig {
  url: string;
}

class Api implements IApi {
  private api: AxiosInstance;

  constructor(config: IAxiosConfig) {
    this.api = Axios.create({
      baseURL: config.url,
    });
  }
  async getDoors(token: string): Promise<AxiosResponse<GetDoorsListResponse>> {
    return await this.api.post('/DoorGetList', {
      Language: 'ua',
      Limit: 0,
      StartToken: 0,
      SubscriptionEnabled: true,
      UserSID: token,
    });
  }

  async login(username: string, pass: string): Promise<AxiosResponse<LoginResponse>> {
    return await this.api.post('/Authenticate', {
      PasswordHash: pass,
      UserName: username,
    });
  }
}

export const api = new Api(axiosConfig);
