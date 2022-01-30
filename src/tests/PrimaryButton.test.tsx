import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { Button } from '../common/button/Button';

test('PrimaryButton should be click', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Button onClick={clickHandler}>Click me</Button>);
  const buttonEl = getByText(/Click me/i);
  fireEvent.click(buttonEl);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
