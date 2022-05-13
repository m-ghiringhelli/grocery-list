import { createContext, useReducer } from 'react';
import { ACTIONS } from '../App';

export const GroceryContext = createContext();
const initialState = [];

function newGrocery(name) {
    return { id: Date.now(), name: name, inCart: false, editing: false }
  }  

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
    case ACTIONS.EDITING:
      return groceries.map((grocery) => {
        if (grocery.id === action.payload.id) {
          return { ...grocery, editing: true }
        }
        return grocery 
      })
    case ACTIONS.UPDATE:
      return groceries.map((grocery) => {
        if (grocery.id === action.payload.id) {
          console.log(action.payload.name)
          return { ...grocery, name: action.payload.name, editing: false }
        }
        return grocery 
      })
    case ACTIONS.REMOVE_FROM_CART:
        return groceries.filter((grocery) => grocery.id !== action.payload.id)
    case ACTIONS.CLEAR_CART:
        return [];
    default: 
      return groceries
  }
}

export function ProvideGroceries({ children }) {
  const [groceries, dispatch] = useReducer(reducer, initialState);

  return (
    <GroceryContext.Provider value={{ groceries, dispatch }}>
      {children}
    </GroceryContext.Provider>
  )
}