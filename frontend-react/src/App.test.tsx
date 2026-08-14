import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the booking form heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/book your service/i);
  expect(headingElement).toBeInTheDocument();
});
