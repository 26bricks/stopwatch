import { render, screen } from '@testing-library/react';
import AppWrapper from './components/AppWrapper'

test('renders learn react link', () => {
  render(
    <AppWrapper />
  );

  const linkElement = screen.getByText(/start/i);
  expect(linkElement).toBeInTheDocument();
});
