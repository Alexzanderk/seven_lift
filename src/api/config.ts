import { IAxiosConfig } from './api';
import { config } from 'dotenv';
config();

export const axiosConfig: IAxiosConfig = {
  url: 'http://upx.7-info.pp.ua:40001/json',
};
