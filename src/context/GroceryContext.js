import { createContext, useContext} from 'react';

const GroceryContext = createContext();

export const useGroceryContext = () => useContext();