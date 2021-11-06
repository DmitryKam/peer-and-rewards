import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { renderWithRedux } from '../store/fakeStore/fakeStore';
import { Employee } from '../ui/organisms/Employee/Employee';

describe('Employee component', () => {
  it('should show employee data', () => {
    const { getByTestId } = renderWithRedux(<Employee />);
    const myEmployeeEl = getByTestId('myReward');
    const employeeNameEl = getByTestId('employeeName');
    const giveEl = getByTestId('give');
    expect(myEmployeeEl.textContent).toBe('$250');
    expect(employeeNameEl.textContent).toBe('Fake User');
    expect(giveEl.textContent).toBe('$0');
  });
});
