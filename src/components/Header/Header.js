import React from "react";
import classes from "./Header.module.css";
function Header() {
  const nav = (
    <nav>
      <div>My Profile</div>
      <div>My Orders</div>
      <div>
        <button>Logout</button>
      </div>
    </nav>
  );
  return (
    <header className={classes.mainHeader}>
      <h3>Counter</h3>
      {nav}
    </header>
  );
}

export default Header;
