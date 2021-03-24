import React, { useState, useEffect } from "react";
import classes from "./homePage.module.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import axios from "axios";
import ServiceList from "../../components/serviceList/ServicesList";
import { listServices } from "../../services/siteServices.service";
function MainPage() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    let sites = await listServices();
    setServicesData([...sites]);
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
