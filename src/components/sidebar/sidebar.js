import React from "react";
import classes from "./sidebar.module.scss";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/icon.svg";
const Sidebar = () => {
  return (
    <div className={classes["sideBarContainer"]}>
      <div className={classes["logoContainer"]}>
        <img src={Logo} />
      </div>
      <div className={classes["menuContainer"]}>
        {[...Array(8)].map((_, index) => {
          return (
            <div className={classes["menuItemContainer"]} key={index}>
              <img src={Menu} className={classes["menuImg"]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
