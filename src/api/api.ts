import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { axiosConfig } from './config';
import { LoginResponse, GetDoorsListResponse, OpenCloseDoorResponse, OpenCloseDoorRequestBody } from './api.types';

interface IApi {
  login(login: string, pass: string): Promise<AxiosResponse<any>>;
  getDoors(token: string): Promise<AxiosResponse<any>>;
  openDoor(data: OpenCloseDoorRequestBody): Promise<AxiosResponse<OpenCloseDoorResponse>>;
  closeDoor(data: OpenCloseDoorRequestBody): Promise<AxiosResponse<OpenCloseDoorResponse>>;
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
  async openDoor(data: OpenCloseDoorRequestBody): Promise<AxiosResponse<OpenCloseDoorResponse>> {
    return await this.api.post('/DoorUnlockList', data);
  }

  async closeDoor(data: OpenCloseDoorRequestBody): Promise<AxiosResponse<OpenCloseDoorResponse>> {
    return await this.api.post('/DoorLockList', data);
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
