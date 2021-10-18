import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorItem } from '../components/ModalForm/ErrorItem/ErrorItem';
import { AppState } from '../store/state';

test('ErrorItem should render with error', () => {
  const { getByText } = render(
    <AppState>
      <ErrorItem>Some Error</ErrorItem>
    </AppState>,
  );
  const text = getByText(/some error/i);
  expect(text).toHaveTextContent('Some Error');
});
