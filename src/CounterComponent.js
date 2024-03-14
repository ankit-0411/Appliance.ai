import React, { useState } from "react";
import "./App.css";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount((c) => c + 1);

  const decrementCounter = () => setCount((c) => (c > 0 ? c - 1 : 0));

  const resetButton = () => {
    setCount(0);
  };

  const backgroundGradient = {
    background: `linear-gradient(to right, #ff0000 ${count * 10}%, #ffffff ${
      count * 10
    }%)`,
  };

  return (
    <div className="counter" style={backgroundGradient}>
      <h2>{count}</h2>
      <div
        style={{ display: "flex", justifyItems: "center", margin: "0 auto" }}
      >
        <button
          onClick={incrementCounter}
          style={{ margin: "10px", padding: "10px" }}
        >
          Increment(+)
        </button>
        <button
          onClick={decrementCounter}
          style={{ margin: "10px", padding: "10px" }}
        >
          Decrement(-)
        </button>
        <button
          onClick={resetButton}
          style={{ margin: "10px", padding: "10px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
