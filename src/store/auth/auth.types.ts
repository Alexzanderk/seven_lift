import { LoginResponse } from '../../api/api.types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  isLoading: true;
  error: null;
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginResponse;
  isLoading: false;
  error: null;
}

export const LOGIN_FAIL = 'LOGIN_FAIL';
export interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  isLoading: false;
  error: string[];
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailAction;
