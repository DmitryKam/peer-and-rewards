import React from 'react';

import { render } from '@testing-library/react';

import { Employee } from '../components/Employee/Employee';
import '@testing-library/jest-dom/extend-expect';
import { AppState } from '../store/AppState';

test('Employee renders', () => {
  const { getByTestId } = render(
    <AppState>
      <Employee />
    </AppState>,
  );
  const myEmployeeEl = getByTestId('myReward');
  const employeeNameEl = getByTestId('employeeName');
  const giveEl = getByTestId('give');
  expect(myEmployeeEl.textContent).toBe('$250');
  expect(employeeNameEl.textContent).toBe('James William');
  expect(giveEl.textContent).toBe('$100');
});
