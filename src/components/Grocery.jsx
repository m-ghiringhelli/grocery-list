import React from 'react'
import { ACTIONS } from '../App.jsx'

export default function Grocery({ grocery, dispatch }) {
  return (
    <div>
      <span style={{ color: grocery.inCart ? '#aaa' : '#000' }}>
        {grocery.name}
      </span>
      <button 
        onClick={() => dispatch(
          { type: ACTIONS.PUT_IN_CART, payload: { id: grocery.id }}
        )}
      >
        Add to cart
      </button>
      <button
        onClick={() => dispatch(
          { type: ACTIONS.REMOVE_FROM_CART, payload: { id: grocery.id }}
        )}
      >Delete</button>
    </div>
  )
}
