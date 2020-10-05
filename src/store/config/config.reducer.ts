import { ConfigActionsTypes, TOGGLE_REVERT, TOGGLE_DARK_MODE } from './config.type';

export interface ConfigState {
  reverse: boolean;
  darkMode: boolean;
}

const initialState: ConfigState = {
  reverse: false,
  darkMode: true,
};

export const configReducer = (state = initialState, action: ConfigActionsTypes): ConfigState => {
  switch (action.type) {
    case TOGGLE_REVERT:
      return {
        ...state,
        reverse: !state.reverse,
      };

    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
