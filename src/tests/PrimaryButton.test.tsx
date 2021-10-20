import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { PrimaryButton } from '../common/Buttons/PrimaryButton';

test('PrimaryButton should be click', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<PrimaryButton onClick={clickHandler}>Click me</PrimaryButton>);
  const buttonEl = getByText(/Click me/i);
  fireEvent.click(buttonEl);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
