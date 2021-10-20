import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorItem } from '../components/ModalForm/ErrorItem/ErrorItem';
import { AppContext } from '../store/appContext/appContext';
import { AuthContext } from '../store/authContext/authContext';
import { appFakeState, authFakeState } from '../store/fakeContext/fakeState';

test('ErrorItem should render with error', () => {
  const { getByText } = render(
    <AppContext.Provider
      value={{
        state: appFakeState,
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
        <ErrorItem>Some Error</ErrorItem>
      </AuthContext.Provider>
    </AppContext.Provider>,
  );
  const text = getByText(/some error/i);
  expect(text).toHaveTextContent('Some Error');
});
