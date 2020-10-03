import { AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './auth.types';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.UserSID
      };

    case LOGIN_FAIL:
      return {
        ...state,
      };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
