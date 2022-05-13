import { render, screen, container } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ProvideGroceries } from './context/GroceryContext';

beforeEach(() => {
  render(
    <ProvideGroceries>
      <App />
    </ProvideGroceries>
  )
})

it('shows header on page load', () => {
  const header = screen.getByRole('heading');
  expect(header).toHaveTextContent(/shopping/);
})

it('add to grocery list, updates counter, deletes, and edits', () => {
  // types in input
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'pizza');
  expect(input).toHaveValue('pizza');

  // adds to list
  const addButton = screen.getByRole('button', {
    name: /add to list/i
  })
  userEvent.click(addButton);
  expect(screen.getByText(/pizza/i)).toBeInTheDocument();

  // add another item
  userEvent.type(input, 'milk');
  userEvent.click(addButton);
  
  // check counter matches
  const counter = screen.getByTestId('list-counter');
  expect(counter).toHaveTextContent('2');

  const deleteButton = screen.getAllByRole('button', { 
    name: /delete/i })[0]
  userEvent.click(deleteButton);
  // pizza is removed
  expect(screen.queryByText(/pizza/i)).not.toBeInTheDocument();
  // counter is updated
  expect(counter).toHaveTextContent('1');

  // edit item
  const editButton = screen.getByRole('button', { 
    name: /edit/i })
  userEvent.click(editButton);
  const edit = screen.getAllByRole('textbox')[1];
  userEvent.type(edit, 'juice');
  expect(edit).toHaveValue('juice');
  const save = screen.getByRole('button', {
    name: /save/i
  })
  userEvent.click(save);
  // item updated
  expect(screen.getByText(/juice/i)).toBeInTheDocument();
  // old value is gone
  expect(screen.queryByText(/milk/i)).not.toBeInTheDocument();
  // counter remains the same
  expect(counter).toHaveTextContent('1');
})