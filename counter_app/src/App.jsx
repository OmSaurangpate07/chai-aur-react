import { useState } from "react";
import "./App.css";

function App() {
  // let count = 5;
  let [count, setCount] = useState(5);

  function increaseCount() {
    // count = count + 1;
    setCount(count + 1);
    // console.log(count);
  }

  function decreaseCount() {
    // count = count - 1;
    setCount(count - 1);
    // console.log(count);
  }

  return (
    <>
      <h2>Counter : {count}</h2>
      <p>You can increase count upto 20 and decrease count upto 0.</p>
      <button onClick={increaseCount} disabled={count >= 20}>
        Increase Count: {count}
      </button>
      <button onClick={decreaseCount} disabled={count <= 0}>
        Decrease Count: {count}
      </button>
    </>
  );
}

export default App;
