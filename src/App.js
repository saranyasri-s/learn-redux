import React from "react";
import Counter from "./components/Counter";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/Form/LoginForm";
function App() {
  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
      <Counter></Counter>
      <div className={classes.Background}></div>
    </div>
  );
}

export default App;
