import React from 'react';

import { render, waitFor, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import { ModalForm } from '../components/ModalForm/ModalForm';

test('Modal form renders', async () => {
  const addRewardToEmployee = jest.fn();
  const handleClose = jest.fn();
  const autocompleteData = ['James William', 'John Chen'];
  const { getByTestId } = render(
    <ModalForm
      addRewardToEmployee={addRewardToEmployee}
      autocompleteData={autocompleteData}
      handleClose={handleClose}
      open
    />,
  );
  //TODO: I have problem with autocomplete
  //const toEmploeeEl = getByTestId('toEmployee');
  const amountEl = getByTestId('amount');
  const whyEl = getByTestId('why');
  //const buttonEl = getByTestId('submit');
  userEvent.type(amountEl, '10');
  userEvent.type(whyEl, 'Thanks for your reward');
  //fireEvent(buttonEl, new MouseEvent('click', { bubbles: true, cancelable: true }));
  await waitFor(() => expect(amountEl).toHaveValue(10));
  expect(whyEl).toHaveValue('Thanks for your reward');
  //expect(toEmploeeEl).toHaveValue('');
});
