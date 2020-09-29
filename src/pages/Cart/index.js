import React from "react";
import styles from "./Cart.module.css";
import CartProduct from "../../components/CartProduct";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function Cart(props) {
  let cartProducts = useSelector((store) => store.cart.products);
  let cartTotal = useSelector((store) => store.cart.total);
  console.log(props);

  const routeToOrderPage = () => {
    if (cartTotal !== 0) {
      props.history.push("/cart/complitingOrder");
    }
  };

  return (
    <div className="">
      <div className={styles.cartPage}>
        <div className={styles.cartInfo}>
          <div className={styles.cartInfoTitles}>
            <span className={`${styles.productTitle} ${styles.title}`}>
              Product
            </span>
            <span className={`${styles.priceTitle} ${styles.title}`}>
              Price
            </span>
            <span className={`${styles.quantityTitle} ${styles.title}`}>
              Quantity
            </span>
            <span className={`${styles.totalTitle} ${styles.title}`}>
              Total
            </span>
          </div>
          <div
            className={`${styles.message} ${
              cartProducts.length === 0 ? "" : styles.hide
            }`}
          >
            Cart is empty
          </div>
          {cartProducts.map((el, id) => {
            return (
              <>
                <CartProduct
                  photo={el.photo}
                  name={el.name}
                  price={el.price}
                  count={1}
                />
              </>
            );
          })}
        </div>
        <div className={styles.cartTotal}>
          <div className={styles.cartTotalTitles}>
            <span className={`${styles.productTotalTitle} ${styles.title}`}>
              Cart totals
            </span>
          </div>
          <div className={styles.totalSum}>
            <p className={styles.subtotal}>Subtotal:</p>
            <div className={styles.totalPrice}>$ {cartTotal}</div>
          </div>
        </div>
        <div onClick={routeToOrderPage} className={styles.myButton}>
          Order now
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
