// Core
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';
import thunk from 'redux-thunk';

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});

const devEnvironment = process.env.NODE_ENV !== 'production';

const middleware: Middleware[] = [thunk];

if (devEnvironment) {
  middleware.push(logger);
}

export { middleware };
