import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';
import { GroceryContext } from './context/GroceryContext';
import { ProvideGroceries } from './context/GroceryContext';

test('shows header on page load', () => {
  render(
    <ProvideGroceries>
      <App />
    </ProvideGroceries>
  )
})