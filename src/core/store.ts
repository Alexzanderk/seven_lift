// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Instruments
import { rootReducer } from './root.reducer';
import { middleware } from './middleware';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
