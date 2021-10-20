import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorSnackBar } from '../components/ErrorSnackBar/ErrorSnackBar';
import { AppContext } from '../store/appContext/appContext';
import { AuthContext } from '../store/authContext/authContext';
import { appFakeState, authFakeState } from '../store/fakeContext/fakeState';
import { AppInitialStateType } from '../store/types';

test('ErrorSnackBar should render with error', () => {
  const fakeState: AppInitialStateType = {
    ...appFakeState,
    errors: 'This is error',
  };
  const handleClose = jest.fn();

  const { getByText } = render(
    <AppContext.Provider
      value={{
        state: fakeState,
        deleteEmployee: jest.fn(),
        setEmployee: jest.fn(),
        addRewardToEmployee: jest.fn(),
        getError: jest.fn(),
        myRewards: [],
        autocompleteData: ['1', '2'],
      }}
    >
      <AuthContext.Provider
        value={{ state: authFakeState, successLogin: jest.fn(), successLogout: jest.fn() }}
      >
        <ErrorSnackBar handleClose={handleClose} />
      </AuthContext.Provider>
    </AppContext.Provider>,
  );
  const text = getByText(/This is error/i);
  expect(text).toHaveTextContent('This is error');
});
