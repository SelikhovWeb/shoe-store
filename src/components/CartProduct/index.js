import React, { useState } from "react";
import styles from "./CartProduct.module.css";
import AmountCounter from "../AmountCounter";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";

function CartProduct(props) {
  let FA = require("react-fontawesome");
  const [amount, setAmount] = useState(props.count);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.deleteButton}
        onClick={() => {
          dispatch(removeFromCart(props.name, props.price));
        }}
      >
        <FA
          name="times-circle-o"
          size="2x"
          style={{
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
            opacity: "1",
            color: "#e74c3c",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.photo})` }}
      ></div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.price}>{`$${props.price}.00`}</div>
      <div className={styles.quantity}>
        <AmountCounter count={props.count} setCount={setAmount} />
      </div>
      <div className={styles.total}>{`$${props.price * amount}.00`}</div>
    </div>
  );
}

export default CartProduct;
