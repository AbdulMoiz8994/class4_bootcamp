import React, {useState} from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(1);
  return (
    <div className="App">
    <h2>Value of counter variable is : {count}</h2>
    <br/>
    <button onClick={
      ()=>setCount(++count)
    }>
     Update counter
    </button>
    </div>
  );
}
// setCount(count++)
// setCount(count+1)
// setCount(2)
// alert("Pressed OK Button")
export default App;
