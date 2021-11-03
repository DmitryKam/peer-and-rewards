import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorSnackBar } from '../components/ErrorSnackBar/ErrorSnackBar';
import { rootFakeState, RootFakeStateType } from '../store/fakeStore/fakeState';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

describe('ErrorSnackBar component', () => {
  let testState: RootFakeStateType = {} as RootFakeStateType;
  const handleClose = jest.fn();
  beforeEach(() => {
    testState = {
      ...rootFakeState,
      app: { ...rootFakeState.app, errors: 'This is error' },
    };
  });
  it('Error should show', () => {
    const { getByText } = renderWithRedux(<ErrorSnackBar handleClose={handleClose} />, testState);
    const text = getByText(/This is error/i);
    expect(text).toHaveTextContent('This is error');
  });
});
