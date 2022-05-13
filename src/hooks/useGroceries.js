import { useContext } from 'react';
import { GroceryContext } from '../context/GroceryContext';

export function useGroceries() {
  const context = useContext(GroceryContext);

  if (context === undefined) {
    throw new Error('useGrocieries must be used inside of a userprovider');
  }

  return context;
}