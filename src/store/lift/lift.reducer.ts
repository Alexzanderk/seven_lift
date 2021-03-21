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
import { getSectionsPanel, changeFloorStatus } from '../../utils/list.util';

export interface Floor {
  floor: string;
  open: boolean;
  section: string;
  house: string;
  token: number;
}

export type LiftState = {
  floorsA: Floor[];
  floorsB: Floor[];
  errors: string[];
  isLoading: boolean;
  doors: Door[];
  A1: Floor[];
  A2: Floor[];
  A3: Floor[];
  B1: Floor[];
  B2: Floor[];
};

const generateFloors = (floorNum: number, section: 'A' | 'B'): Floor[] => {
  const floors: Floor[] = [];

  for (let index = 0; index < floorNum; index++) {
    const floor: Floor = {
      floor: `${index + 1}`,
      open: false,
      section,
      house: '',
      token: 0,
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
  A1: [],
  A2: [],
  A3: [],
  B1: [],
  B2: [],
};

export const liftReducer = (state = initialState, action: LiftActionTypes) => {
  switch (action.type) {
    case DOOR_OPEN_REQUEST:
    case DOOR_CLOSE_REQUEST:
    case GET_ALL_DOORS_REQUEST:
      return { ...state, isLoading: true };

    case DOOR_OPEN_SUCCESS:
    case DOOR_CLOSE_SUCCESS:
      const changeStatus = changeFloorStatus(action.payload.token);

      return {
        ...state,
        isLoading: false,
        A1: state.A1.map(changeStatus),
        A2: state.A2.map(changeStatus),
        A3: state.A3.map(changeStatus),
        B1: state.B1.map(changeStatus),
        B2: state.B2.map(changeStatus),
      };

    case DOOR_OPEN_FAIL:
    case DOOR_CLOSE_FAIL:
      return { ...state, isLoading: false };

    case GET_ALL_DOORS_SUCCESS:
      const { A1, A2, A3, B1, B2 } = getSectionsPanel(action.payload.Door);
      return {
        ...state,
        isLoading: false,
        doors: action.payload.Door,
        floorsA: A1,
        floorsB: B1,
        A1,
        A2,
        A3,
        B1,
        B2,
      };

    case GET_ALL_DOORS_FAIL:
      return { ...state, isLoading: false };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
