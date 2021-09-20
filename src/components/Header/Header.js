import React from "react";
import { useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/index";
import { useSelector } from "react-redux";
function Header() {
  const auth = useSelector((state) => {
    return state.auth.auth;
  });
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const nav = (
    <nav>
      <div>My Profile</div>
      <div>My Orders</div>
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </nav>
  );
  return (
    <header className={classes.mainHeader}>
      <h3>Counter</h3>
      {auth && nav}
    </header>
  );
}

export default Header;
