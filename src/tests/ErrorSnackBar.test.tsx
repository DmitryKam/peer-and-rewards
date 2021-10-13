import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorSnackBar } from '../components/ErrorSnackBar/ErrorSnackBar';
import { AppContext } from '../store/appContext';
import { initialState } from '../store/state';
import { InitialStateType } from '../store/types';

test('ErrorSnackBar should render with error', () => {
  const fakeState: InitialStateType = {
    ...initialState,
    errors: 'This is error',
  };
  const handleClose = jest.fn();
  const addRewardToEmployee = jest.fn();
  const currentEmployee = fakeState.employee[0];
  const myRewards = fakeState.rewardsData;
  const autocompleteData = ['1', '2'];

  const { getByText } = render(
    <AppContext.Provider
      value={{
        state: fakeState,
        addRewardToEmployee,
        currentEmployee,
        myRewards,
        autocompleteData,
      }}
    >
      <ErrorSnackBar handleClose={handleClose} />
    </AppContext.Provider>,
  );
  const text = getByText(/This is error/i);
  expect(text).toHaveTextContent('This is error');
});
