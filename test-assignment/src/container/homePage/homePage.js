import React, { useState, useEffect } from "react";
import classes from "./homePage.module.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import axios from "axios";
import ServiceList from "../../components/serviceList/ServicesList";
import { MOCKURL } from "../../constants";
function MainPage() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(async () => {
    await getData();
  }, []);

  const getData = async () => {
    let sites = await axios.get(MOCKURL);
    console.log(sites.data);
    console.log(sites.data.length);
    setServicesData([...sites.data]);
  };
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
          <ServiceList data={servicesData} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
