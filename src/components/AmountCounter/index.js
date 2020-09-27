import React, { useState } from "react";
import styles from "./AmountCounter.module.css";

function AmountCounter(props) {

    let FA = require("react-fontawesome");

    const [amount, setAmount] = useState(props.count);

    function minus() {
        if (amount > 1) {
            setAmount(amount - 1)
            props.setCount(amount - 1)
        }
    }
    function plus() {
        setAmount(amount + 1)
        props.setCount(amount + 1)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.minus} onClick={minus}>
                <FA
                    name="minus"

                    style={{
                        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                        opacity: "1",
                        color: "rgba(160, 160, 160, 0.7)",
                        cursor: "pointer",
                    }}
                /></div>
            <div className={styles.counter}>{amount}</div>
            <div className={styles.plus} onClick={plus}>
                <FA
                    name="plus"

                    style={{
                        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                        opacity: "1",
                        color: "rgba(160, 160, 160, 0.7)",
                        cursor: "pointer",
                    }}
                /></div>
        </div>
    );
}

export default AmountCounter;