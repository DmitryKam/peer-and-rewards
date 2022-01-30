import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { UserInfo } from '../components/UserInfo/UserInfo';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

describe('UserInfo component', () => {
  it('should show employee data', () => {
    const { getByTestId } = renderWithRedux(<UserInfo />);
    const myEmployeeEl = getByTestId('myReward');
    const employeeNameEl = getByTestId('employeeName');
    const giveEl = getByTestId('give');
    expect(myEmployeeEl.textContent).toBe('$250');
    expect(employeeNameEl.textContent).toBe('Fake User');
    expect(giveEl.textContent).toBe('$0');
  });
});
