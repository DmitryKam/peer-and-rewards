import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';

test('HeaderBar renders', () => {
  const { getByText } = render(<HeaderBar />);
  const text = getByText(/Peer Rewards/i);
  expect(text).toHaveTextContent('Peer Rewards');
});
