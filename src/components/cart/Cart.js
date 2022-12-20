import React, { useContext } from "react";
import { cartContext } from "../../store/cart-context";
import CartItem from "./cartItem/CartItem";
import ReactDOM from "react-dom";


import './cart.css'

const CartModal = () => {
  const ctxCart = useContext(cartContext);
  console.log(ctxCart.totalAmount)
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-elements">
          <div className="cart-top">
            <h4 id="cart-title">My Cart</h4>
          </div>
          <div className="cart-middle">
            <ul className="cart-lists">
              {ctxCart.cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  food={item}
                  foodName={item.name}
                  foodCategory={item.category}
                  foodDescription={item.description}
                  foodPrice={item.price}
                  foodAmount={item.amount}
                />
              ))}
            </ul>
          </div>
          <div className="cart-bottom">
              <h3>{`Total Amount: $${ctxCart.totalAmount}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  return ReactDOM.createPortal(<CartModal />, document.getElementById("cart"));
};

export default Cart;
