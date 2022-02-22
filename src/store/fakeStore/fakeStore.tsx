import { ReactElement } from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { ThemeProvider } from '../../themeConfig/ThemeProvider';
import { appReducer } from '../appReducer';
import { authReducer } from '../authReducer';
import { rootFakeState } from './fakeState';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const renderWithRedux = (ui: ReactElement, myState = rootFakeState) => {
  const store = createStore(rootReducer, myState, applyMiddleware(thunk));

  return {
    ...render(
      <ThemeProvider>
        <Provider store={store}>{ui}</Provider>
      </ThemeProvider>,
    ),
    store,
  };
};
