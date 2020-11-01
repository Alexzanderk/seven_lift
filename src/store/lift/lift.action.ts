import {
  DOOR_CLOSE_FAIL,
  DOOR_CLOSE_REQUEST,
  DOOR_CLOSE_SUCCESS,
  DOOR_OPEN_FAIL,
  DOOR_OPEN_REQUEST,
  DOOR_OPEN_SUCCESS,
  GET_ALL_DOORS_REQUEST,
  GET_ALL_DOORS_FAIL,
  GET_ALL_DOORS_SUCCESS,
} from './lift.types';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../core/root.reducer';
import { LiftActionTypes } from '../lift/lift.types';
import { api } from '../../api/api';
import { OpenCloseDoorRequestBody } from '../../api/api.types';
import { LOGIN_REQUEST, AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAIL } from '../auth/auth.types';

export const getLiftPanelFromApi = (token: string) => {
  return async (dispatch: ThunkDispatch<AppState, any, LiftActionTypes>): Promise<void> => {
    try {
      console.log('action', token);
      dispatch({ type: GET_ALL_DOORS_REQUEST });
      const response = await api.getDoors(token);
      const Door = response.data.Door.filter((el) => !el.Name.includes('Res'));
      console.log({ response, data: Door });

      dispatch({ type: GET_ALL_DOORS_SUCCESS, payload: { Door } });
    } catch (error) {
      dispatch({ type: GET_ALL_DOORS_FAIL, payload: error });
    }
  };
};

export const openDoor = (data: OpenCloseDoorRequestBody) => {
  return async (
    dispatch: ThunkDispatch<AppState, any, LiftActionTypes | AuthActionTypes>,
    getState: () => AppState,
  ): Promise<void> => {
    try {
      dispatch({ type: DOOR_OPEN_REQUEST });
      const response = await api.openDoor(data);
      console.log({ open: response });

      dispatch({
        type: DOOR_OPEN_SUCCESS,
        payload: { token: data.Tokens[0] },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: DOOR_OPEN_FAIL, payload: error.message });

      try {
        dispatch({ type: LOGIN_REQUEST, error: null, isLoading: true });
        const state = getState();
        const loginResponse = await api.login(state.auth.credentials.username, state.auth.credentials.pass);
        dispatch({
          type: LOGIN_SUCCESS,
          error: null,
          isLoading: false,
          payload: loginResponse.data,
          credentials: {
            username: state.auth.credentials.username,
            pass: state.auth.credentials.pass,
          },
        });
      } catch (error) {
        dispatch({ type: LOGIN_FAIL, isLoading: false, error: error.message });
      }
    }
  };
};

export const closeDoor = (data: OpenCloseDoorRequestBody) => {
  return async (
    dispatch: ThunkDispatch<AppState, any, LiftActionTypes | AuthActionTypes>,
    getState: () => AppState,
  ): Promise<void> => {
    try {
      dispatch({ type: DOOR_CLOSE_REQUEST });
      const response = await api.closeDoor(data);
      console.log({ open: response });

      dispatch({
        type: DOOR_CLOSE_SUCCESS,
        payload: { token: data.Tokens[0] },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: DOOR_CLOSE_FAIL, payload: error.message });

      try {
        dispatch({ type: LOGIN_REQUEST, error: null, isLoading: true });
        const state = getState();
        const loginResponse = await api.login(state.auth.credentials.username, state.auth.credentials.pass);
        dispatch({
          type: LOGIN_SUCCESS,
          error: null,
          isLoading: false,
          payload: loginResponse.data,
          credentials: {
            username: state.auth.credentials.username,
            pass: state.auth.credentials.pass,
          },
        });
      } catch (error) {
        dispatch({ type: LOGIN_FAIL, isLoading: false, error: error.message });
      }
    }
  };
};
