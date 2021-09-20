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
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increaseBy(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
  },
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
