// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1 };
//   }
//   if (action.type === "increaseBy") {
//     return { counter: state.counter + action.value };
//   }
//   return state;
// };
// const store = createStore(counterReducer);
// export default store;
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
