import React, { useState } from "react";
import "./ProductCard.css";
import ProductCardSize from "../ProductCardSize/productCardSize";
import ProductCardColor from "../ProductCardColor";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions";

function ProductCard(props) {
  let FA = require("react-fontawesome");
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [adding, setAdding] = useState(false);
  const cartProducts = useSelector((store) => store.cart.products);

  //Function for adding product information to store
  function addProduct() {
    //Counting total sum of all products in cart
    let total = 0;
    cartProducts.map((el) => {
      total += el.price;
    });
    setAdding(true);
    dispatch(
      addToCart(
        props.images[0],
        props.title,
        props.endPrice,
        1,
        total + props.endPrice
      )
    );
  }

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img className="product-card__png" src={props.images[count]} alt="" />
      </div>

      <div className="product-card__title">
        <div className="product-card__name">{props.title}</div>
        <div className="product-card__price">{`$ ${props.price}`}</div>
        <div
          className={`product-card__sale-line ${props.sale ? "" : "hide"}`}
        ></div>
        <div className={`product-card__sale-price ${props.sale ? "" : "hide"}`}>
          {`$ ${props.salePrice}`}
        </div>
      </div>

      <div className="product-card__size">
        <ProductCardSize sizes={props.sizes} />
      </div>
      <div className="product-card__color">
        <ProductCardColor setColor={setCount} items={props.colors} />
      </div>
      <div className={`producr-card__button  ${!adding ? "" : "hide"}`}>
        <button onClick={addProduct} className="product-card__buyNow">
          Add to cart
        </button>
      </div>
      <div className={`product-card__amount ${adding ? "" : "hide"}`}>
        <Link to="/Cart" style={{ textDecoration: "none" }}>
          <div className="product-card__goToCart">
            Go to cart
            <FA
              className="product-card__cartIcon"
              name=" fa-cart-plus"
              size="2x"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                opacity: "0.8",
                color: "black",
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
