import React from "react";
import "./FilterButtons.css";
import { Link } from "react-router-dom";


function FilterButtons(props) {
  return (
    <div>
      <div className="wrapper top-wrapper">
        <div className="button">
        <Link className="button-link" to={`/products/${props.titles[0].replace(/\s/g, '')}`}>
          {props.titles[0]}
        </Link>
          </div>
        <div className="button">{props.titles[1]}</div>
        <div className="button">{props.titles[2]}</div>
      </div>
    </div>
  );
}

export default FilterButtons;
