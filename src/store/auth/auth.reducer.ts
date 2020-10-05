import { AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './auth.types';

export interface AuthState {
  token: string;
  errors: string[];
  credentials: {
    username: string;
    pass: string;
  };
}

const initialState: AuthState = {
  token: '',
  errors: [],
  credentials: {
    username: '',
    pass: '',
  },
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
        token: action.payload.UserSID,
        credentials: {
          username: action.credentials.username,
          pass: action.credentials.pass,
        },
      };

    case LOGIN_FAIL:
      return {
        ...state,
        errors: [action.error],
      };

    case LOGOUT:
      return {
        ...state,
        token: '',
        credentials: {
          pass: '',
          username: '',
        },
      };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
