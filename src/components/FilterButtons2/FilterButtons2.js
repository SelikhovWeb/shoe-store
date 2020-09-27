import React from "react";
import "./FilterButtons2.css";
import { Link } from "react-router-dom";

function FilterButtons2(props) {
  return (
    <div>
      <div className="wrapper">
        <div className="button">
          <Link
            className="button-link"
            to={`/products/${props.titles[0]}`}
          >
            {props.titles[0]}
          </Link>
        </div>
        <div className="button">{props.titles[1]}</div>
        <div className="button">{props.titles[2]}</div>
        <div className="button">{props.titles[3]}</div>
      </div>
    </div>
  );
}

export default FilterButtons2;
