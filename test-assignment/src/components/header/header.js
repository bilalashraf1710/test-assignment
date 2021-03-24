import React from "react";
import classes from "./header.module.scss";
function Header() {
  return (
    <div className={classes["headerContainer"]}>
      <div style={{ marginRight: 40 }}>
        <p className={classes["subtitle"]}> Balance</p>
        <h3 className={classes["title"]}> 213 920 $</h3>
      </div>
      <div>
        <p className={classes["subtitle"]}>Payout</p>
        <h3 className={classes["title"]}>159 465 $</h3>
      </div>
    </div>
  );
}

export default Header;
