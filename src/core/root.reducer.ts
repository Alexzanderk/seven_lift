// Core
import { combineReducers } from 'redux';
import { authReducer } from '../store/auth/auth.reducer';

// Reducers

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
