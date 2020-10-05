import { ToggleRevertAction, TOGGLE_REVERT } from './config.type';

export const toggleRevert = (): ToggleRevertAction => ({
  type: TOGGLE_REVERT,
});
