import React from 'react';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(1);
  
  const addValue = () => {
    if(counter >= 20 ){
      alert("counter should be between 0 and 20");
      return;
    }
    setCounter(counter + 1);
    console.log("Added", counter + 1);
    
  }

  const removeValue = () => {
      if (counter <=0){
      alert("counter should be between 0 and 20");
      return;
    }
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