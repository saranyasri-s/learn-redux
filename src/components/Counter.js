import React from "react";
import classes from "./Counter.module.css";
import { counterActions } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const dispatch = useDispatch();
  const addCounterHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const reduceCounterHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const increaseByHandler = () => {
    // dispatch({ type: "increaseBy", value: 5 });
    dispatch(counterActions.increaseBy(5));
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
        <button onClick={increaseByHandler}>Increase</button>
      </div>
    </div>
  );
}

export default Counter;

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";
// class Counter extends Component {
//   addCounterHandler() {
//     this.props.increment();
//   }
//   reduceCounterHandler() {
//     this.props.decrement();
//   }
//   render() {
//     return (
//       <div className={classes.Counter}>
//         <h2>Redux Counter</h2>
//         <div>
//           <p>{this.props.counter}</p>
//         </div>
//         <div className={classes.buttons}>
//           <button onClick={this.addCounterHandler.bind(this)}>Add</button>
//           <button onClick={this.reduceCounterHandler.bind(this)}>Reduce</button>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       return dispatch({ type: "increment" });
//     },
//     decrement: () => {
//       return dispatch({ type: "decrement" });
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
