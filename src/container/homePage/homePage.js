import React from "react";
import classes from "./homePage.module.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import ServiceList from "../../components/serviceList/servicesList";

function MainPage() {
  return (
    <div className={classes["mainPageContainer"]}>
      <div className={classes["sideBar"]}>
        <Sidebar />
      </div>
      <div className={classes["contentContainer"]}>
        <div>
          <Header />
        </div>

        <div className={classes["mainContent"]}>
          <ServiceList />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
