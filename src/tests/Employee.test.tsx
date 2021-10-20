import React from 'react';

import { render } from '@testing-library/react';

import { Employee } from '../components/Employee/Employee';
import '@testing-library/jest-dom/extend-expect';
import { AppContext } from '../store/appContext/appContext';
import { AuthContext } from '../store/authContext/authContext';
import { appFakeState, authFakeState } from '../store/fakeContext/fakeState';

test('Employee renders', () => {
  const { getByTestId } = render(
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
        <Employee />
      </AuthContext.Provider>
    </AppContext.Provider>,
  );
  const myEmployeeEl = getByTestId('myReward');
  const employeeNameEl = getByTestId('employeeName');
  const giveEl = getByTestId('give');
  expect(myEmployeeEl.textContent).toBe('$250');
  expect(employeeNameEl.textContent).toBe('Fake User');
  expect(giveEl.textContent).toBe('$0');
});
