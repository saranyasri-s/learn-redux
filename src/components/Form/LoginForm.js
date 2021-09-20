import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./LoginForm.module.css";
import { authActions } from "../store/index";
function LoginForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    setName("");
    setPassword("");
  };
  return (
    <form onSubmit={submitHandler} className={classes.Form}>
      <div>
        <label htmlFor="name">Name</label>
        <input onChange={nameChangeHandler} id="name" type="text"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={passwordChangeHandler}
          id="password"
          type="pwd"
        ></input>
      </div>
      <div className={classes.buttons}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
