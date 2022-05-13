import React, { useState } from 'react'
import { ACTIONS } from '../App.jsx'

export default function Grocery({ grocery, dispatch }) {
  const [editedGrocery, setEditedGrocery] = useState('');

  function handleEdit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.UPDATE, payload: { id: grocery.id } });
    setEditedGrocery('');
  }
  return (
    <>
      {grocery.editing ?
        <form onSubmit={handleEdit}>
          <input 
            type='text'
            value={editedGrocery}
            onChange={(e) => setEditedGrocery(e.target.value)}
          />
          <button>
            Save
          </button>
        </form> :
        <>
          <span
            style={{ color: grocery.inCart ? '#aaa' : '#000' }}
            onClick={() => dispatch(
              { type: ACTIONS.PUT_IN_CART, payload: { grocery } }
            )}
          >
            {grocery.name}
          </span>
          <button
            onClick={() => dispatch(
              { type: ACTIONS.EDITING, payload: { id: grocery.id } }
            )}
          >
            Edit
          </button>
        </>
      }
      <button
        onClick={() => dispatch(
          { type: ACTIONS.REMOVE_FROM_CART, payload: { id: grocery.id } }
        )}
      >
        Delete
      </button>
    </>
  )
}
