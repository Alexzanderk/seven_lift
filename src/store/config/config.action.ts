import { SetBackgroundAction, SET_BACKGROUND, ToggleRevertAction, TOGGLE_REVERT } from './config.type';

export const toggleRevert = (): ToggleRevertAction => ({
  type: TOGGLE_REVERT,
});

export const setBackground = (bg: string): SetBackgroundAction => ({
  type: SET_BACKGROUND,
  payload: { bg },
});
