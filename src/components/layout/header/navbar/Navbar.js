import React, { useContext } from "react";
import { cartContext } from "../../../../store/cart-context";
import Button from "../../../UI/button/Button";

import "./navbar.css";

const Navbar = () => {
  const ctxCart = useContext(cartContext);

  const count = ctxCart.cartItems.reduce(
    (prevAmount, newAmount) => prevAmount + newAmount.amount,
    0
  );

  return (
    <div className="nav-section">
      <nav className="nav-container">
        <ul className="nav-lists">
          <li className="nav-item">
            <a href="/">
              <Button className="nav-btn">Home</Button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/about">
              <Button className="nav-btn">About Us</Button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/services">
              <Button className="nav-btn">Services</Button>
            </a>
          </li>
          <li className="nav-item">
            <Button
              className={ctxCart.cartClassName}
              onClick={ctxCart.onShowCart.bind(null)}
            >
              Cart <span id="cart-count">{count}</span>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
