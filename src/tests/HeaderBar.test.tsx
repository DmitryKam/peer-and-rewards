import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';
import { AppContext } from '../store/appContext/appContext';
import { AuthContext } from '../store/authContext/authContext';
import { appFakeState, authFakeState } from '../store/fakeContext/fakeState';

test('HeaderBar renders', () => {
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
        <HeaderBar />
      </AuthContext.Provider>
    </AppContext.Provider>,
  );
  const text = getByText(/Peer and Rewards/i);
  expect(text).toHaveTextContent('Peer and Rewards');
});
