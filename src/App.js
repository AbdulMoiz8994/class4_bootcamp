import React, {useState} from 'react';
import './App.css';
import {Message} from './message.js';
function App() {

  let [count, setCount] = useState(0);
  let [isMorning, isNight]=useState()
  return (
    <div className={`box ${isMorning? "dayLight" : ""}`}>
      <h1>Day Time= {isMorning? 'Morning' : 'Night'}</h1>

      <Message counter={count}/>
    <br/>
    <button onClick={
      ()=>setCount(++count)
    }>
     Update counter
    </button>
    <button onClick={()=>isNight(!isMorning)}>
    Update Day
    </button>
    </div>
  )
}
// let [isMorning, isNight]=useState(true)

// setCount(count++)
// setCount(count+1)
// setCount(2)
// alert("Pressed OK Button")
export default App;
