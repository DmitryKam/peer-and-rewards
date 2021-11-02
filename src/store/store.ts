import { combineReducers, createStore } from 'redux';

import { appReducer } from './appReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
