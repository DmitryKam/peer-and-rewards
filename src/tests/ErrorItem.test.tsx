import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorItem } from '../components/ModalForm/ErrorItem/ErrorItem';
import { renderWithRedux } from '../store/fakeStore/fakeStore';

test('ErrorItem should render with error', () => {
  const { getByText } = renderWithRedux(<ErrorItem>Some Error</ErrorItem>);
  const text = getByText(/some error/i);
  expect(text).toHaveTextContent('Some Error');
});
