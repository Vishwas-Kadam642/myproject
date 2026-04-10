import React from 'react';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(1);
  
  const addValue = () => {

    setCounter(counter + 1);
    console.log("Added", counter + 1);
    
  }

  const removeValue = () => {

    setCounter(counter - 1);
    console.log("Removed", counter - 1);
  }
  return (
    <>
    <h1>Counter {counter}</h1>

    <button onClick={addValue}>Add {counter}</button>   
    <br />                                                      
    <button onClick={removeValue}>remove value {counter}</button>                                                         
    </>                       

  );
}

export default App;