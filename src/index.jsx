import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideGroceries } from './context/GroceryContext';

render(
  <React.StrictMode>
    <ProvideGroceries>
      <App />
    </ProvideGroceries>
  </React.StrictMode>,
  document.getElementById('root')
);
