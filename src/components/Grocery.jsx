import React from 'react'
import { ACTIONS } from '../App.jsx'

export default function Grocery({ grocery, dispatch }) {
  return (
    <div>
      <span 
        style={{ color: grocery.inCart ? '#aaa' : '#000' }}
        onClick={() => dispatch(
            { type: ACTIONS.PUT_IN_CART, payload: { id: grocery.id }}
          )}
      >
        {grocery.name}
      </span>
      <button 
        
      >
        Edit
      </button>
      <button
        onClick={() => dispatch(
          { type: ACTIONS.REMOVE_FROM_CART, payload: { id: grocery.id }}
        )}
      >Delete</button>
    </div>
  )
}
