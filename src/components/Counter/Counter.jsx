import { useState } from "react";
import './counter.css'

function Counter() {
  const [counter, setCounter] = useState(0);

  function decrement() {
    return setCounter(counter - 1);
  }

  function increment() {
    return setCounter(counter + 1);
  }

  return (
    <div className="container">
      <button className="decrement" onClick={decrement}>
        -
      </button>
      <h2>{counter}</h2>
      <button className="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter
