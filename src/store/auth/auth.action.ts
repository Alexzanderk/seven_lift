import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { AppState } from '../../core/root.reducer';
import { api } from '../../api/api';
import { LOGIN_SUCCESS, AuthActionTypes, LOGIN_FAIL, LOGIN_REQUEST, LogoutAction, LOGOUT } from './auth.types';
import { getHash } from '../../core/core.tools';

export const login = (username: string, pass: string): ThunkAction<void, AppState, unknown, Action<string>> => {
  return async (dispatch: ThunkDispatch<AppState, any, AuthActionTypes>): Promise<void> => {
    try {
      dispatch({ type: LOGIN_REQUEST, error: null, isLoading: true });
      const PasswordHash = getHash(pass);
      const response = await api.login(username, PasswordHash);
      console.log(response);

      dispatch({
        type: LOGIN_SUCCESS,
        error: null,
        isLoading: false,
        payload: response.data,
        credentials: {
          username,
          pass,
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        isLoading: false,
        error: error.message,
      });
    }
  };
};

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
