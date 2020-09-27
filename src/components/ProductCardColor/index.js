import React, { useState } from "react";
import "./ProductCardColor.css";
import { v4 as uuidv4 } from "uuid";

function ProductCardColor(props) {
  const [checkBoxes, setCheked] = useState(props.items);

  const handleChange = (id) => {
    const copyOfArr = [...checkBoxes];
    checkBoxes.forEach((el, id_2) => {
      if (id_2 !== id) el.status = false;
    });
    copyOfArr[id].status = !copyOfArr[id].status;
    setCheked(copyOfArr);
  };

  return (
    <div className="product-card-color">
      <p>Color: </p>
      {checkBoxes.map((el, id) => (
        <label className="label-color" key={uuidv4()}>
          <input
            className="color-checkbox"
            type="checkbox"
            checked={el.status}
            onChange={() => {
              handleChange(id);
              if (el.status) {
                props.setColor(el.id);
              }
            }}
          />
          <span
            className="fake-color"
            style={{ backgroundColor: `${el.color}` }}
          ></span>
        </label>
      ))}
    </div>
  );
}

export default ProductCardColor;
