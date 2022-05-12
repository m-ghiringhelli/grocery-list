import React, { useReducer, useState } from 'react';
import Grocery from './components/Grocery';

export const ACTIONS = {
  ADD_GROCERY: 'add-grocery',
  PUT_IN_CART: 'put-in-cart',
  REMOVE_FROM_CART: 'remove from cart'
}

const initialState = [];

function reducer(groceries, action) {
  switch (action.type) {
    case ACTIONS.ADD_GROCERY:
      return [...groceries, newGrocery(action.payload.name)]
    case ACTIONS.PUT_IN_CART:
      return groceries.map((grocery) => {
        if (grocery.id === action.payload.id) {
          return { ...grocery, inCart: !grocery.inCart }
        }
        return grocery 
      })
    case ACTIONS.REMOVE_FROM_CART:
      return groceries.filter((grocery) => grocery.id !== action.payload.id)
  }
}

function newGrocery(name) {
  return { id: Date.now(), name: name, inCart: false }
}

export default function App() {
  const [groceries, dispatch] = useReducer(reducer, initialState);
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
