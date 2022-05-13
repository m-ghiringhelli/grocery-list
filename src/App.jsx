import React, { useReducer, useState } from 'react';
import Grocery from './components/Grocery';
import { useGroceries } from './hooks/useGroceries';

export const ACTIONS = {
  ADD_GROCERY: 'add-grocery',
  PUT_IN_CART: 'put-in-cart',
  REMOVE_FROM_CART: 'remove from cart'
}

export default function App() {
  const { groceries, dispatch } = useGroceries();
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_GROCERY, payload: { name } });
    setName('');
  }
  console.log(groceries);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Add to list:
          <input 
            type='text' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button>Add to list</button>
      </form>
      {groceries.map((grocery) => (
        <Grocery key={grocery.id} grocery={grocery} dispatch={dispatch} />
      ))}
    </>
  );
}
