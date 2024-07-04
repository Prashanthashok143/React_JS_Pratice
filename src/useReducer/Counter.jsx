import React, { useReducer } from "react";
const reducer = (state, action) => {
  console.log(`Coming State ${state}`);
  console.log(`Coming Action ${action.playload}`);
  if (action.type === "INCREMENT") {
    return state + action.playload;                    // here we taken state as value ,if we taken in object we must return in object  retutn {} like this.
  } else if (action.type === "DECREMENT") {
    return state - action.playload;
  } else if (action.type === "RESET") {
    return 0;
  } else {
    return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
      playload: 100,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
      playload: 100,
    });
  };
  const handleRest = () => {
    dispatch({
      type: "RESET",
      playload: 0,
    });
  };
  return (
    <div>
      <h1>Counter Example</h1>
      <button onClick={handleIncrement} className="btn btn-warning">
        Increment
      </button>
      {counter}
      <button className="btn btn-danger" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="btn btn-success" onClick={handleRest}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
