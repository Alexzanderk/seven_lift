export const DOOR_OPEN_REQUEST = 'DOOR_OPEN_REQUEST';
export interface DoorOpenRequestAction {
  type: typeof DOOR_OPEN_REQUEST;
}

export const DOOR_OPEN_SUCCESS = 'DOOR_OPEN_SUCCESS';
export interface DoorOpenSuccess {
  type: typeof DOOR_OPEN_SUCCESS;
}

export const DOOR_OPEN_FAIL = 'DOOR_OPEN_FAIL';
export interface DoorOpenFail {
  type: typeof DOOR_OPEN_FAIL;
}

export const DOOR_CLOSE_REQUEST = 'DOOR_CLOSE_REQUEST';
export interface DoorCloseRequestAction {
  type: typeof DOOR_CLOSE_REQUEST;
}

export const DOOR_CLOSE_SUCCESS = 'DOOR_CLOSE_SUCCESS';
export interface DoorCloseSuccessAction {
  type: typeof DOOR_CLOSE_SUCCESS;
}

export const DOOR_CLOSE_FAIL = 'DOOR_CLOSE_FAIL';
export interface DoorCloseFailAction {
  type: typeof DOOR_CLOSE_FAIL;
}

export type LiftActionTypes =
  | DoorOpenRequestAction
  | DoorOpenSuccess
  | DoorOpenFail
  | DoorCloseRequestAction
  | DoorCloseSuccessAction
  | DoorCloseFailAction;
