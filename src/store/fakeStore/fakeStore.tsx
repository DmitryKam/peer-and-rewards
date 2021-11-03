import { ReactElement } from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { appReducer } from '../appReducer';
import { authReducer } from '../authReducer';
import { rootFakeState } from './fakeState';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const renderWithRedux = (ui: ReactElement, myState = rootFakeState) => {
  const store = createStore(rootReducer, myState);
  return { ...render(<Provider store={store}>{ui}</Provider>), store };
};
