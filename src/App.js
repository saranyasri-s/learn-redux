import React from "react";
import Counter from "./components/Counter";
import classes from "./App.module.css";
function App() {
  return (
    <div>
      <Counter></Counter>
      <div className={classes.Background}></div>
    </div>
  );
}

export default App;
