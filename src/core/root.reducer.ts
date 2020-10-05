// Core
import { combineReducers } from 'redux';
import { authReducer } from '../store/auth/auth.reducer';
import { liftReducer } from '../store/lift/lift.reducer';
import { configReducer } from '../store/config/config.reducer';

// Reducers

export const rootReducer = combineReducers({
  auth: authReducer,
  lift: liftReducer,
  config: configReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
