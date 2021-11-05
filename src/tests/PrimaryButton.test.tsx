import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { Index } from '../ui/atoms/button/primapyButton';

test('Index should be click', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Index onClick={clickHandler}>Click me</Index>);
  const buttonEl = getByText(/Click me/i);
  fireEvent.click(buttonEl);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
