import React from 'react'
import { ACTIONS } from '../App';
import { useGroceries } from '../hooks/useGroceries'


export default function Header() {
  const { groceries, dispatch } = useGroceries();
  
  function clearGroceries() {
    dispatch({ type: ACTIONS.CLEAR_CART });
  }

  return (
    <div>
      <h1>
        shopping list
      </h1>
      <p>Total items: 
        <span>
          {groceries.length}
        </span>
        <span onClick={clearGroceries}>
          clear cart
        </span>
      </p>
    </div>
  )
}
