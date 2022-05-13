import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';
import { GroceryContext } from './context/GroceryContext';
import { ProvideGroceries } from './context/GroceryContext';

beforeEach(() => {
  render(
    <ProvideGroceries>
      <App />
    </ProvideGroceries>
  )
})

test('shows header on page load', () => {
  const header = screen.getByRole('heading');
  expect(header).toHaveTextContent(/shopping/);
})