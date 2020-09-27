import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Nike from "./pages/Nike/Nike";
import Cart from "./pages/Cart";
import SortedFromCheapest from "./pages/SortedFromCheapest/SortedFromCheapest";
import Authorization from "./pages/Authorization";
import ComplitingOrder from "./pages/ComplitingOrder/Index";
import OrderMessage from "./pages/OrderMessage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sneaker-Shop-React-Project" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/authorization" component={Authorization} />
          <Route path="/products/Nike" component={Nike} />
          <Route
            path="/products/Sortedfromcheapest"
            component={SortedFromCheapest}
          />
          <Route path="/cart" exact component={Cart} />
          <Route
            path="/cart/complitingOrder"
            exact
            component={ComplitingOrder}
          />
          <Route
            path="/cart/complitingOrder/orderMessage"
            component={OrderMessage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
