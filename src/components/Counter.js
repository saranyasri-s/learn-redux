import React from "react";
import classes from "./Counter.module.css";
function Counter() {
  return (
    <div className={classes.Counter}>
      <h2>Redux Counter</h2>
      <div>
        <p>counter number</p>
      </div>
      <div className={classes.buttons}>
        <button>Add</button>
        <button>Reduce</button>
      </div>
    </div>
  );
}

export default Counter;
