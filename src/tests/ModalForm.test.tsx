import React from 'react';

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { RewardsDialog } from '../components/ModalForm/RewardsDialog';

test('Modal form submit without error', async () => {
  const addRewardToEmployee = jest.fn();
  const handleClose = jest.fn();
  const autocompleteData = ['James William', 'John Chen'];
  const { getByTestId, getByRole, getByText } = render(
    <RewardsDialog
      addRewardToEmployee={addRewardToEmployee}
      autocompleteData={autocompleteData}
      handleClose={handleClose}
      open
      amount={10}
    />,
  );

  const element = document.forms[0].querySelector('input[name="toEmployee"]') as Element;
  element.textContent = 'James William';
  const toEmploeeEl = getByText('James William');
  const amountEl = getByTestId('amount');
  const whyEl = getByTestId('why');
  userEvent.type(toEmploeeEl, 'James William');
  userEvent.type(amountEl, '10');
  userEvent.type(whyEl, 'Thanks for your reward');
  await waitFor(() => expect(amountEl).toHaveValue(10));
  expect(whyEl).toHaveTextContent('Thanks for your reward');
  expect(toEmploeeEl).toHaveTextContent('James William');
  await waitFor(() => userEvent.click(getByRole('button', { name: /Reward/i })));
  expect(() => getByText(/Enter correct employee/i)).toThrow(
    'Unable to find an element with the text',
  );
});

test('Modal form  has error', async () => {
  const addRewardToEmployee = jest.fn();
  const handleClose = jest.fn();
  const autocompleteData = ['James William', 'John Chen'];
  const { getByTestId, getByRole, getByText } = render(
    <RewardsDialog
      addRewardToEmployee={addRewardToEmployee}
      autocompleteData={autocompleteData}
      handleClose={handleClose}
      open
      amount={10}
    />,
  );

  const amountEl = getByTestId('amount');
  const whyEl = getByTestId('why');
  userEvent.type(amountEl, '10');
  userEvent.type(whyEl, 'Thanks for your reward');
  await waitFor(() => expect(amountEl).toHaveValue(10));
  expect(whyEl).toHaveTextContent('Thanks for your reward');
  await waitFor(() => userEvent.click(getByRole('button', { name: /Reward/i })));
  expect(getByText(/Enter correct employee/i)).toHaveTextContent('Enter correct employee');
});
