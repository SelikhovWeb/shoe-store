import React from "react";
import styles from "./DeliveryLine.module.css";

function DeliveryLine(props) {
  let width;
  console.log(props.active)
  switch (props.active) {
    case '1':
      width = "10%";
      break;
    case '2':
      width = "26%";
      break;
    case '3':
      width = "45%";
      break;
    case '4':
      width = "70%";
      break;
    default:
      width = "0%";
  }
  return (
    <div className={styles.box}>
      <div
        style={{
          content: "",
          display: "block",
          margin: "auto",
          width: width,
          height: "10px",
          borderRadius: "30px",
          backgroundColor: "#e74c3c",
          opacity: "0.95",
          position: "absolute",
          transition: "all 1s ease",
        }}
      ></div>
    </div>
  );
}

export default DeliveryLine;
