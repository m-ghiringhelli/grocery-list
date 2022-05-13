import React from 'react'
import { ACTIONS } from '../App.jsx'

export default function Grocery({ grocery, dispatch }) {
  return (
    <>
      {grocery.editing ?
        <form>
          <input />
          <button>
            Save
          </button>
        </form> :
        <>
          <span
            style={{ color: grocery.inCart ? '#aaa' : '#000' }}
            onClick={() => dispatch(
              { type: ACTIONS.PUT_IN_CART, payload: { id: grocery.id } }
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
