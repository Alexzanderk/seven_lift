import { ConfigActionsTypes, TOGGLE_REVERT, TOGGLE_DARK_MODE, SET_BACKGROUND } from './config.type';

export interface ConfigState {
  reverse: boolean;
  darkMode: boolean;
  bg: string;
}

const initialState: ConfigState = {
  reverse: !!localStorage.getItem('reversePanels') || false,
  darkMode: true,
  bg: 'bg',
};

export const configReducer = (state = initialState, action: ConfigActionsTypes): ConfigState => {
  switch (action.type) {
    case TOGGLE_REVERT:
      localStorage.setItem('reversePanels', !state.reverse === true ? '1' : '');
      return {
        ...state,
        reverse: !state.reverse,
      };

    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case SET_BACKGROUND:
      return {
        ...state,
        bg: action.payload.bg,
      };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
