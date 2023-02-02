import './App.css';
import { addCount, divideCount, multiCount } from "./redux/action";
import { store } from "./redux/reduxIntro";
import { useState } from "react"
import { removeCount } from './redux/action';
// import "./style.css";


function App() {
 
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(1);

  console.log(store.getState());
  

  const handleAdd = () => {
    store.dispatch(addCount(1));
    console.log("check", store.getState().counter);
    const temp = store.getState();
    setCounter(temp.counter);
  }

  const handleRemove = () => {
    store.dispatch(removeCount(1));
    const temp = store.getState();
    setCounter(temp.counter);
  }
 
  const handleAddInput = () => {
     store.dispatch(addCount(+num));
     setCounter(store.getState().counter);
  }

   const handleSubtractInput = () => {
     store.dispatch(removeCount(+num));
     setCounter(store.getState().counter);
  }
 
  const handleMultiply = () => {
     store.dispatch(multiCount(+num));
     setCounter(store.getState().counter);
  }

   const handleDivide = () => {
     store.dispatch(divideCount(+num));
     setCounter(store.getState().counter);
  }
  return (
    <div className="App">
      <h1>Counter App using Redux</h1>
      <h3>vlaue</h3>
      <div className="counter">{counter}</div>
      <button className="counterButt" onClick={handleAdd}>Increment</button>
      <button className="counterButt" onClick={handleRemove}>Decrement</button>
      
      <br/>
      <br/>
      <br/>
      <h1>Redux-Calculator</h1>
      <div>
        <h3>User Input</h3>
        <input className="counterButt inputBox" type="Number" onChange={(e)=> setNum(e.target.value)} />
      </div>
      <div>
        <div>
          <button className="counterButt" onClick={handleAddInput}>Add</button>
            <button className="counterButt" onClick={handleMultiply}>Multiply</button>
        </div>
        <div>
           <button className="counterButt" onClick={handleSubtractInput}>Subtract</button>
       <button className="counterButt" onClick={handleDivide}>Divide</button>
        </div>
      </div>
    </div>
  );
}

export default App;