import React from "react";
import styles from "./ComplitingOrder.module.css";
import Footer from "../../components/Footer";
import OrderForm from '../../components/OrderForm';



function ComplitingOrder() {
  return (
    <div className={styles.orderPage}
    style={{ backgroundImage: `linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)` }}>
      
      <div className={styles.wrapper}>
        <OrderForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default ComplitingOrder;
