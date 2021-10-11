import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { FeelAndRewards } from '../components/FeelAndRewards/FeelAndRewards';
import { AppState } from '../store/AppState';

test('FeelAndRewards should render my Reward list', () => {
  const { getByText } = render(
    <AppState>
      <FeelAndRewards />
    </AppState>,
  );

  const textEl = getByText(/Alex Brown rewarded by Rajesh Kumar/i);
  expect(textEl).toBeInTheDocument();
  const feelBtnEl = getByText(/My Rewards/i);
  fireEvent.click(feelBtnEl);
  const myListEl = getByText(/Thanks for your help/i);
  expect(myListEl).toBeInTheDocument();
});
