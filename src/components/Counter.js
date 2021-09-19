import React from "react";
import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  return (
    <div className={classes.Counter}>
      <h2>Redux Counter</h2>
      <div>
        <p>{counter}</p>
      </div>
      <div className={classes.buttons}>
        <button>Add</button>
        <button>Reduce</button>
      </div>
    </div>
  );
}

export default Counter;
