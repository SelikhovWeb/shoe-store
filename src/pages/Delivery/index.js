import React, { useState } from "react";
import styles from "./Delivery.module.css";
import DeliveryLine from "../../components/DeliveryLine";
import DeliveryStage from "../../components/DeliveryStage";
import Shop from "../../images/shop.svg";
import Support from "../../images/24-hours-support.svg";
import Wallet from "../../images/wallet.svg";
import MapCart from "../../images/map.svg";
import Truck from "../../images/delivery-truck.svg";

function Delivery() {
  const [actives, setActives] = useState(0);
  const iconsArray = [Shop, MapCart, Support, Truck, Wallet];
  const descriptionsArray = [
    "Сhoose your favorite pair of shoes from our catalog",
    "Check your cart and make an order",
    "Our operators will call you immediatly",
    "We are gifting a 3-days free delivery for order with 2+ order",
    "Pay the courier after you have inspected the goods",
  ];
  const handleClick = (e) => {
    setActives(e.target.textContent);
  };

  return (
    <div className={styles.deliveryPage}>
      <h1 className={styles.title}>
        Get your item in 4 easy steps
      </h1>
      <div
        className={styles.imageBox}
        style={{ backgroundImage: `url(${iconsArray[actives]})` }}
      >
      </div>
        <h3 className={styles.description}>{descriptionsArray[actives]}</h3>
      <div className={styles.lineBox}>
        <DeliveryLine className={styles.deliveryLine} active={actives} />
        <div className={styles.stages}>
          <DeliveryStage
            number={1}
            active={actives > 0 ? true : false}
            onClick={handleClick}
          />
          <DeliveryStage
            number={2}
            active={actives > 1 ? true : false}
            onClick={handleClick}
          />
          <DeliveryStage
            number={3}
            active={actives > 2 ? true : false}
            onClick={handleClick}
          />
          <DeliveryStage
            number={4}
            active={actives > 3 ? true : false}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Delivery;
