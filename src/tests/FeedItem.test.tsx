import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { FeedItem } from '../components/FeelAndRewards/FeedItem/FeedItem';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

test('FeelAndRewards should render my Reward list', () => {
  const FeedItemProps = {
    from: 'James William',
    to: 'John Chen',
    why: 'Tests',
    date: new Date(
      'date Tue Sep 14 2021 00:00:00 GMT+0300 (Eastern European Summer Time)',
    ).toString(),
    user: {
      name: 'James William',
      email: 'aaa@aaa.aa',
      imageUrl: 'fakeUrl',
      myRewards: 250,
      give: 10,
      id: '1',
    },
  };
  const { getByText } = renderWithRedux(<FeedItem {...FeedItemProps} />);
  const textRewardEl = getByText(/James William rewarded by John Chen/i);
  const textWhyEl = getByText(/Tests/i);
  expect(textWhyEl).toHaveTextContent('Tests');
  expect(textRewardEl).toHaveTextContent('James William rewarded by John Chen');
});
