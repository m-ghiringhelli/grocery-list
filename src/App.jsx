import React, { useReducer, useState } from 'react';

const ACTIONS = {

}

const initialState = [];

function reducer(state, action) {

}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <label>
          Add to list:
          <input 
            type='text' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
