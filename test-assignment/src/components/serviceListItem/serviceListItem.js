import React, { useState, useCallback } from "react";
import Icon from "../../assets/copyIcon.svg";
import classes from "./serviceListItem.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
function ServiceListItem({ item, activateHandler }) {
  // const [isActivated, setIsActivated] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={classes["listItemContainer"]}>
      <div style={{ width: "40%", marginLeft: 20 }}>
        <h1 className={classes["title"]}>{item.title} </h1>
        <p className={classes["description"]} style={{ color: "#7d7d7d" }}>
          {item.description}
        </p>
      </div>
      <div className={classes["promoCodeDiv"]} style={{ width: "30%" }}>
        <p
          className={classes["promoCodeText"]}
          style={{ color: "#7d7d7d", fontSize: 12 }}
        >
          PROMOCODE
          <span style={{ marginLeft: "47%" }}>
            {isCopied ? "Copied to clipboard" : ""}
          </span>
        </p>
        <div className={classes["promoCode"]}>
          {item.promoCode}{" "}
          <div
            onClick={() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 500);
            }}
          >
            <div style={{ cursor: "pointer" }}>
              <CopyToClipboard text={item.promoCode}>
                <img src={Icon} title="copy to clipboard" />
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["buttonDiv"]} style={{ width: "30%" }}>
        <div style={{ fontSize: 12, color: "white" }}>{"s"}</div>
        {!item.isActivated ? (
          <div
            className={classes["buttonRed"]}
            onClick={() => activateHandler(item.id)}
          >
            Activated
          </div>
        ) : (
          <div
            className={classes["buttonBlue"]}
            onClick={() => activateHandler(item.id)}
          >
            Activate Bonus
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceListItem;
