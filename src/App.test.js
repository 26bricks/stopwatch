import { render, screen, fireEvent } from '@testing-library/react';
import AppWrapper from './components/AppWrapper'

test('Start / pause button', () => {
  render(
    <AppWrapper />
  );

  const startButton = screen.getByText(/start/i);
  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);

  const pauseButton = screen.getByText(/pause/i);
  expect(pauseButton).toBeInTheDocument();
});
