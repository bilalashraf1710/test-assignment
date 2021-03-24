import React, { useState, useEffect } from "react";
import ServiceListItem from "../serviceListItem/serviceListItem";
import classes from "./serviceList.module.scss";
import { listServices } from "../../services/siteServices.service";

function ServiceList({ data }) {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  // returns data from api
  const getServices = async () => {
    let sites = await listServices();
    setServicesList(sites);
  };

  useEffect(() => {
    setFilterData();
  }, [filter]);

  const setFilterData = () => {
    const results = servicesList.filter((item) =>
      item.title.toLowerCase().includes(filter)
    );
    setFilteredData([...results]);
  };

  const activateHandler = (id) => {
    const index = servicesList.findIndex((item) => item.id === id);
    servicesList[index].isActivated = !servicesList[index].isActivated;
    setServicesList([...servicesList]);
  };

  return (
    <div className={classes["contentContainer"]}>
      <h1 className={classes["mainHeading"]}>Services</h1>
      <p className={classes["subtitle"]}>Filter</p>
      <div className={classes["inputDiv"]}>
        <div className={classes["input"]}>
          <input
            value={filter}
            className={classes["textBox"]}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className={classes["submit"]} onClick={() => setFilter("")}>
          <p>Reset </p>
        </div>
      </div>
      <div className={classes["listContainer"]}>
        {filter === ""
          ? servicesList.map((item, index) => {
              return (
                <div key={index}>
                  <ServiceListItem
                    item={item}
                    isActivated={item.isActivated[index]}
                    activateHandler={activateHandler}
                  />
                </div>
              );
            })
          : filteredData &&
            filteredData.map((item, index) => {
              return (
                <div key={index}>
                  <ServiceListItem
                    item={item}
                    isActivated={item.isActivated[index]}
                    activateHandler={activateHandler}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ServiceList;
