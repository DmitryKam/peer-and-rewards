import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';
import { rootFakeState, RootFakeStateType } from '../store/fakeStore/fakeState';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

const stateWithLogIn: RootFakeStateType = {
  ...rootFakeState,
  auth: {
    ...rootFakeState.auth,
    auth: {
      isAuth: true,
      checkAuth: false,
    },
    user: null,
  },
};

test('HeaderBar renders', () => {
  const { getByText } = renderWithRedux(<HeaderBar />);
  const text = getByText(/Peer and Rewards/i);
  expect(text).toHaveTextContent('Peer and Rewards');
});

test('HeaderBar render with logIn', () => {
  const { getByText } = renderWithRedux(<HeaderBar />, stateWithLogIn);
  const text = getByText(/Peer and Rewards/i);
  const buttonEl = getByText(/sign out/i);
  expect(text).toHaveTextContent('Peer and Rewards');
  expect(buttonEl).toHaveTextContent('Sign Out');
});
