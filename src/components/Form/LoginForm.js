import React from "react";
import classes from "./LoginForm.module.css";
function LoginForm() {
  return (
    <form className={classes.Form}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="pwd"></input>
      </div>
      <div className={classes.buttons}>
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
