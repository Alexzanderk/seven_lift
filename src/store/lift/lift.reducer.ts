import {
  LiftActionTypes,
  DOOR_OPEN_REQUEST,
  DOOR_OPEN_SUCCESS,
  DOOR_OPEN_FAIL,
  DOOR_CLOSE_REQUEST,
  DOOR_CLOSE_SUCCESS,
  DOOR_CLOSE_FAIL,
} from './lift.types';

export interface Floor {
  floor: number;
  open: boolean;
  section: 'A' | 'B';
}

export type LiftState = {
  floorsA: Floor[];
  floorsB: Floor[];
  errors: string[];
};

const generateFloors = (floorNum: number, section: 'A' | 'B'): Floor[] => {
  const floors: Floor[] = [];

  for (let index = 0; index < floorNum; index++) {
    const floor: Floor = {
      floor: index + 1,
      open: false,
      section,
    };
    floors.push(floor);
  }

  return floors;
};

const initialState: LiftState = {
  floorsA: generateFloors(25, 'A'),
  floorsB: generateFloors(25, 'B'),
  errors: []
};

export const liftReducer = (state = initialState, action: LiftActionTypes) => {
  switch (action.type) {
    case DOOR_OPEN_REQUEST:
    case DOOR_CLOSE_REQUEST:
      return { ...state };

    case DOOR_OPEN_SUCCESS:
      return { ...state };

    case DOOR_OPEN_FAIL:
      return { ...state };

    case DOOR_CLOSE_SUCCESS:
      return { ...state };

    case DOOR_CLOSE_FAIL:
      return { ...state };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
