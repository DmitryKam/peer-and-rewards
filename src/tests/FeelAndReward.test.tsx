import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { FeedAndRewards } from '../components/FeelAndRewards/FeedAndRewards';
import { appFakeState } from '../store/fakeStore/fakeState';

test('FeelAndRewards should render', () => {
  const { getByText, debug } = render(
    <FeedAndRewards
      state={appFakeState}
      handleChange={jest.fn()}
      open={false}
      value={0}
      handleOpen={jest.fn()}
      handleClose={jest.fn()}
      addRewardToEmployee={jest.fn()}
      currentEmployee={appFakeState.employees[0]}
      autocompleteData={['One,Two']}
      myRewards={[]}
    />,
  );

  const textEl = getByText(/Alex Brown rewarded by Rajesh Kumar/i);
  const feedEl = getByText(/Feed/i);
  const myRewardEl = getByText(/My Rewards/i);

  expect(textEl).toHaveTextContent('Alex Brown rewarded by Rajesh Kumar');
  expect(feedEl).toHaveTextContent('Feed');
  expect(myRewardEl).toHaveTextContent('My Rewards');
});
