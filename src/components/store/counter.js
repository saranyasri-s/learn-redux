import { createSlice } from "@reduxjs/toolkit";
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
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
