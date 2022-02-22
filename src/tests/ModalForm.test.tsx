import React from 'react';

import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { RewardsDialog } from '../components/ModalForm/RewardsDialog';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

test('Modal form submit without error', async () => {
  const addRewardToEmployee = jest.fn();
  const handleClose = jest.fn();
  const autocompleteData = ['James William', 'John Chen'];
  const { getByRole, getByText, getAllByLabelText } = renderWithRedux(
    <RewardsDialog
      addRewardToEmployee={addRewardToEmployee}
      autocompleteData={autocompleteData}
      handleClose={handleClose}
      open
    />,
  );

  const element = document.forms[0].querySelector('input[name="toEmployee"]') as Element;
  element.textContent = 'James William';
  const toEmploeeEl = getByText('James William');
  const amountEl = getAllByLabelText('Reward');
  const whyEl = getAllByLabelText('Why');

  userEvent.type(toEmploeeEl, 'James William');
  userEvent.type(amountEl[0], '10');
  userEvent.type(whyEl[0], 'Thanks for your reward');
  await waitFor(() => expect(amountEl[0]).toHaveValue(10));
  expect(whyEl[0]).toHaveTextContent('Thanks for your reward');
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
  const { getByRole, getByText, getAllByLabelText } = renderWithRedux(
    <RewardsDialog
      addRewardToEmployee={addRewardToEmployee}
      autocompleteData={autocompleteData}
      handleClose={handleClose}
      open
    />,
  );

  const amountEl = getAllByLabelText('Reward');
  const whyEl = getAllByLabelText('Why');
  userEvent.type(amountEl[0], '10');
  userEvent.type(whyEl[0], 'Thanks for your reward');
  await waitFor(() => expect(amountEl[0]).toHaveValue(10));
  expect(whyEl[0]).toHaveTextContent('Thanks for your reward');
  await waitFor(() => userEvent.click(getByRole('button', { name: /Reward/i })));
  expect(getByText(/Enter correct employee/i)).toHaveTextContent('Enter correct employee');
});
