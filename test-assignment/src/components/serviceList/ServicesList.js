import React, { useState, useEffect } from "react";
import ServiceListItem from "../serviceListItem/serviceListItem";
import classes from "./serviceList.module.scss";

function ServiceList({ data }) {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilterData();
  }, [filter]);

  const setFilterData = () => {
    const results = data.filter((data) =>
      data.title.toLowerCase().includes(filter)
    );
    setFilteredData([...results]);
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
          ? data.map((item, index) => {
              return (
                <div key={index}>
                  <ServiceListItem item={item} />
                </div>
              );
            })
          : filteredData &&
            filteredData.map((item, index) => {
              return (
                <div key={index}>
                  <ServiceListItem item={item} />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ServiceList;
