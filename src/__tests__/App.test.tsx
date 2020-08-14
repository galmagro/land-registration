import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('should render title', () => {
  const { getByText } = render(<App/>);
  const titleElement = getByText(/land_register/i);
  expect(titleElement).toBeInTheDocument();
});
