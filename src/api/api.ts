import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { axiosConfig } from './config';
import { LoginResponse } from './api.types';

interface IApi {
  login(login: string, pass: string): Promise<any>;
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

  async login(username: string, pass: string): Promise<AxiosResponse<LoginResponse>> {
    return await this.api.post('/Authenticate', {
      PasswordHash: pass,
      UserName: username,
    });
  }
}

export const api = new Api(axiosConfig);
