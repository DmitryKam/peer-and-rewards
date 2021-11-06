import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { FeedItem } from '../ui/molecules/FeedItem';

test('FeelAndRewards should render my Reward list', () => {
  const FeedItemProps = {
    from: 'James William',
    to: 'John Chen',
    why: 'Tests',
    date: new Date('date Tue Sep 14 2021 00:00:00 GMT+0300 (Eastern European Summer Time)'),
    employees: [
      {
        name: 'James William',
        myReward: 250,
        give: 100,
        avatar:
          'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
      },
      {
        name: 'John Chen',
        myReward: 200,
        give: 150,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AGnMFzOLvv-du52tYrZXv32ChA-0yr0urA&usqp=CAU',
      },
    ],
  };
  const { getByText } = render(<FeedItem {...FeedItemProps} />);
  const textRewardEl = getByText(/James William rewarded by John Chen/i);
  const textWhyEl = getByText(/Tests/i);
  expect(textWhyEl).toHaveTextContent('Tests');
  expect(textRewardEl).toHaveTextContent('James William rewarded by John Chen');
});
