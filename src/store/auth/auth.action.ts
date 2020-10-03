import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { AppState } from '../../core/root.reducer';
import { api } from '../../api/api';
import { LOGIN_SUCCESS, AuthActionTypes, LOGIN_FAIL, LOGIN_REQUEST } from './auth.types';
import { MD5 } from 'crypto-js';

export const login = (username: string, pass: string): ThunkAction<void, AppState, unknown, Action<string>> => {
  return async (dispatch: ThunkDispatch<AppState, any, AuthActionTypes>): Promise<void> => {
    try {
      dispatch({ type: LOGIN_REQUEST, error: null, isLoading: true });

      const PasswordHash = MD5(MD5(MD5(pass) + '88020F057FE7287D8D57494382356F97'))
      console.log(PasswordHash.toString().toUpperCase());
      //PasswordHash = MD5( MD5( MD5(пароль пользователя) + “F593B01C562548C6B7A31B30884BDE53”))

      // const response = await api.login(username, PasswordHash);
      // console.log(response);

      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   error: null,
      //   isLoading: false,
      //   payload: response.data,
      // });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        isLoading: false,
        error: error.message,
      });
    }
  };
};
