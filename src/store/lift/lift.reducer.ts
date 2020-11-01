import {
  LiftActionTypes,
  DOOR_OPEN_REQUEST,
  DOOR_OPEN_SUCCESS,
  DOOR_OPEN_FAIL,
  DOOR_CLOSE_REQUEST,
  DOOR_CLOSE_SUCCESS,
  DOOR_CLOSE_FAIL,
  GET_ALL_DOORS_SUCCESS,
  GET_ALL_DOORS_FAIL,
  GET_ALL_DOORS_REQUEST,
} from './lift.types';
import { Door } from '../../api/api.types';
import { getSectionsPanel } from '../../utils/list.util';

export interface Floor {
  floor: string;
  open: boolean;
  section: string;
  house?: string;
  token?: number;
}

export type LiftState = {
  floorsA: Floor[];
  floorsB: Floor[];
  errors: string[];
  isLoading: boolean;
  doors: Door[];
};

const generateFloors = (floorNum: number, section: 'A' | 'B'): Floor[] => {
  const floors: Floor[] = [];

  for (let index = 0; index < floorNum; index++) {
    const floor: Floor = {
      floor: `${index + 1}`,
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
  errors: [],
  isLoading: false,
  doors: [],
};

export const liftReducer = (state = initialState, action: LiftActionTypes) => {
  switch (action.type) {
    case DOOR_OPEN_REQUEST:
    case DOOR_CLOSE_REQUEST:
    case GET_ALL_DOORS_REQUEST:
      return { ...state, isLoading: true };

    case DOOR_OPEN_SUCCESS:
      return { ...state, isLoading: false };

    case DOOR_OPEN_FAIL:
      return { ...state, isLoading: false };

    case DOOR_CLOSE_SUCCESS:
      return { ...state, isLoading: false };

    case DOOR_CLOSE_FAIL:
      return { ...state, isLoading: false };

    case GET_ALL_DOORS_SUCCESS:
      const { A1, B1 } = getSectionsPanel(action.payload.Door);
      return {
        ...state,
        isLoading: false,
        doors: action.payload.Door,
        floorsA: A1,
        floorsB: B1,
      };

    case GET_ALL_DOORS_FAIL:
      return { ...state, isLoading: false };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
