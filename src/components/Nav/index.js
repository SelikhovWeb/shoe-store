import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Nav() {
  let FA = require("react-fontawesome");
  const isAuth = useSelector((store) => store.user.isAuth);
  const userName = useSelector((store) => store.user.name);
  const cartQuantity = useSelector((store) => store.cart.products.length)
  
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //toggle nav
    nav.classList.toggle("nav-active");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
          }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  };

  return (
    <header>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <h4>Sneaker ok</h4>
            <p className={`userGreeting ${isAuth ? '' : 'hide'}`}>{`Hello, ${userName} !`}</p>
          </div>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/delivery">Delivery</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="authorizationAndCart">
          <div className={`authorizationLink ${isAuth ? 'hide' : ''}`}>
            <Link to="/Authorization">
              <FA
                name="user-o"
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  opacity: "0.8",
                  color: "white",
                  cursor: "pointer"
                }}
              />
            </Link>
          </div>
          <div className="cartLink">
          <Link to="/Cart">
              <div className={`cartQuantity ${cartQuantity===0? 'hide': ''}`}>{cartQuantity}</div>
            <FA
              name=" fa-cart-plus"
              size="2x"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                opacity: "0.8",
                color: "white",
                cursor: "pointer"
              }}
            />
          </Link>
          </div>
        </div>
        <div className="burger" onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
