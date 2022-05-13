import { createContext, useReducer } from 'react';
import { ACTIONS } from '../App';

export const GroceryContext = createContext();
const initialState = [];

function newGrocery(name) {
    return { id: Date.now(), name: name, inCart: false }
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
      case ACTIONS.REMOVE_FROM_CART:
        return groceries.filter((grocery) => grocery.id !== action.payload.id)
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