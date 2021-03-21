export const TOGGLE_REVERT = 'TOGGLE_REVERT';
export interface ToggleRevertAction {
  type: typeof TOGGLE_REVERT;
}

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export interface ToggleDarkModeAction {
  type: typeof TOGGLE_DARK_MODE;
}

export const SET_BACKGROUND = 'SET_BACKGROUND';
export interface SetBackgroundAction {
  type: typeof SET_BACKGROUND;
  payload: { bg: string };
}

export type ConfigActionsTypes = ToggleRevertAction | ToggleDarkModeAction | SetBackgroundAction;
