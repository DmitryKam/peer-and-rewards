import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { FeelAndRewards } from '../components/FeelAndRewards/FeelAndRewards';
import { appInitialState } from '../store/state';

test('FeelAndRewards should render', () => {
  const { getByText } = render(
    <FeelAndRewards
      state={appInitialState}
      handleChange={jest.fn()}
      open={false}
      value={0}
      handleChangeIndex={jest.fn()}
      handleOpen={jest.fn()}
      handleClose={jest.fn()}
      addRewardToEmployee={jest.fn()}
      currentEmployee={appInitialState.employees[0]}
      autocompleteData={['One,Two']}
      myRewards={appInitialState.rewardsData}
    />,
  );

  const textEl = getByText(/Alex Brown rewarded by Rajesh Kumar/i);
  const feedEl = getByText(/Feed/i);
  const myRewardEl = getByText(/My Rewards/i);

  expect(textEl).toBeInTheDocument();
  expect(feedEl).toHaveTextContent('Feed');
  expect(myRewardEl).toHaveTextContent('My Rewards');
});
