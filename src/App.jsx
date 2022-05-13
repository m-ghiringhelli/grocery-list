import React, { useReducer, useState } from 'react';
import Grocery from './components/Grocery';
import Header from './components/Header'
import { useGroceries } from './hooks/useGroceries';
import style from './App.css';

export const ACTIONS = {
  ADD_GROCERY: 'add-grocery',
  PUT_IN_CART: 'put-in-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  EDITING: 'editing',
  UPDATE: 'update',
  CLEAR_CART: 'clear-cart'
}

export default function App() {
  const { groceries, dispatch } = useGroceries();
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_GROCERY, payload: { name } });
    setName('');
  }

  return (
    <>
      <Header />
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
      <div className={style.groceryList}>
        {groceries.map((grocery) => (
          <Grocery key={grocery.id} grocery={grocery} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}
