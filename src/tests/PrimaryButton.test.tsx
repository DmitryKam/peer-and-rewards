import React from 'react';

import { fireEvent } from '@testing-library/react';

import { Button } from '../common/button/Button';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

test('PrimaryButton should be click', () => {
  const clickHandler = jest.fn();
  const { getByText } = renderWithRedux(<Button onClick={clickHandler}>Click me</Button>);
  const buttonEl = getByText(/Click me/i);
  fireEvent.click(buttonEl);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
