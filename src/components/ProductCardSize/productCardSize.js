import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../ProductCard/ProductCard.css";

function ProductCardSize(props) {
  const [checkBoxes, setCheked] = useState(props.sizes);

  const handleChange = (id) => {
    const copyOfArr = [...checkBoxes];
    checkBoxes.forEach((el, id_2) => {
      if (id_2 !== id) el.status = false;
    });
    copyOfArr[id].status = !copyOfArr[id].status;
    setCheked(copyOfArr);
  };

  return (
    <div className="product-card-size">
      <p>Size: </p>
      {checkBoxes.map((el, id) => (
        <label className="label" key={uuidv4()}>
          <input
            className="size-checkbox"
            type="checkbox"
            checked={el.status}
            onChange={() => {
              handleChange(id);
            }}
          />
          <span className="fake">{el.size}</span>
        </label>
      ))}
    </div>
  );
}

export default ProductCardSize;
