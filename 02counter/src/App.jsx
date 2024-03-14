import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addvalue = () => {

    if (counter == 20)
      return 20;
    // console.log("value added", counter);
    // counter = counter + 1
    setCounter(counter + 1)
    
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  const decreasevalue = () => {
    if (counter == 15)
      return 15;
    setCounter(counter - 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

    // console.log("vlue decrease", setCounter);
    // counter = counter - 1
   
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Add Value{counter}</button>
      <button onClick={decreasevalue}>Decrease Value{counter}</button>
    </>
  )
}
export default App
