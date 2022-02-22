import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { FeelAndRewards } from '../components/FeelAndRewards/FeelAndRewards';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

test('FeelAndRewards should render', () => {
  const { getByText } = renderWithRedux(
    <FeelAndRewards
      handleChange={jest.fn()}
      open={false}
      value={0}
      handleOpen={jest.fn()}
      handleClose={jest.fn()}
      addRewardToEmployee={jest.fn()}
      user={{
        name: 'James William',
        email: 'aaa@aaa.aa',
        imageUrl: 'fakeUrl',
        myRewards: 250,
        give: 10,
        id: '1',
      }}
      autocompleteData={['One,Two']}
      myRewards={[]}
      rewardsData={[
        {
          from: 'James William',
          to: 'John Chen',
          why: 'Tests',
          date: new Date(
            'date Tue Sep 14 2021 00:00:00 GMT+0300 (Eastern European Summer Time)',
          ).toString(),
          id: '1',
          amount: 1000,
        },
      ]}
    />,
  );

  const textEl = getByText(/James William rewarded by John Chen/i);
  const feedEl = getByText(/Feed/i);
  const myRewardEl = getByText(/My Rewards/i);

  expect(textEl).toHaveTextContent('James William rewarded by John Chen');
  expect(feedEl).toHaveTextContent('Feed');
  expect(myRewardEl).toHaveTextContent('My Rewards');
});
