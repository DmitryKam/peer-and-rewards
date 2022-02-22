import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { UserInfo } from '../components/UserInfo/UserInfo';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

describe('UserInfo component', () => {
  it('should show employee data', () => {
    const { getByText } = renderWithRedux(<UserInfo />);
    const myEmployeeEl = getByText('Fake User');
    const rewardsEl = getByText('$250');
    const giveEl = getByText('$0');
    expect(myEmployeeEl.textContent).toBe('Fake User');
    expect(rewardsEl.textContent).toBe('$250');
    expect(giveEl.textContent).toBe('$0');
  });
});
