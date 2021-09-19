import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  const addCounterHandler = () => {
    dispatch({ type: "increment" });
  };
  const reduceCounterHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className={classes.Counter}>
      <h2>Redux Counter</h2>
      <div>
        <p>{counter}</p>
      </div>
      <div className={classes.buttons}>
        <button onClick={addCounterHandler}>Add</button>
        <button onClick={reduceCounterHandler}>Reduce</button>
      </div>
    </div>
  );
}

export default Counter;
