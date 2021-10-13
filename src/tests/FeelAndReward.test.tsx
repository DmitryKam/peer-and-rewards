import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { FeelAndRewards } from '../components/FeelAndRewards/FeelAndRewards';
import { initialState } from '../store/state';

test('FeelAndRewards should render', () => {
  const { getByText, getByTestId } = render(
    <FeelAndRewards
      state={initialState}
      handleChange={jest.fn()}
      open={false}
      value={0}
      handleChangeIndex={jest.fn()}
      handleOpen={jest.fn()}
      handleClose={jest.fn()}
      addRewardToEmployee={jest.fn()}
      currentEmployee={initialState.employee[0]}
      autocompleteData={['One,Two']}
      myRewards={initialState.rewardsData}
    />,
  );
  const feedEl = getByText(/Feed/i);
  const myRewardEl = getByText(/My Rewards/i);
  const modalIconEl = getByTestId(/modalIcon/i);
  expect(feedEl).toHaveTextContent('Feed');
  expect(myRewardEl).toHaveTextContent('My Rewards');
  expect(fireEvent.click(modalIconEl)).toHaveBeenCalled();
});
