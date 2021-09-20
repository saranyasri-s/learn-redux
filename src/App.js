import React from "react";
import Counter from "./components/Counter";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/Form/LoginForm";
import MyProfile from "./components/MyProfile/MyProfile";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => {
    return state.auth.auth;
  });
  return (
    <div>
      <Header></Header>
      {auth && (
        <>
          <MyProfile></MyProfile>
          <Counter></Counter>
        </>
      )}
      {!auth && <LoginForm></LoginForm>}

      <div className={classes.Background}></div>
    </div>
  );
}

export default App;
