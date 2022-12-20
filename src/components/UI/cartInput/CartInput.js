import React, { useContext } from "react";
import { cartContext } from "../../../store/cart-context";
import Button from "../button/Button";

import './cartInput.css'

function CartInput(props) {
  const ctxCart = useContext(cartContext);
  const handleDecrement = () => {
    if(props.count < 1){
      ctxCart.onDeleteFromCart(props.id)
    }
    ctxCart.onRemoveFromCart(props.id);
  };
  const handleIncrement = () => {
    ctxCart.onAddToCart({
      id: props.id,
      name: props.name,
      category: props.category,
      description: props.description,
      price: props.price,
      amount: 1,
    });
  };
  return (
    <div className="cart-input-container">
      <div className="cart-input-wrapper">
        <div className="cart-input-left">
          <Button onClick={handleDecrement}>
            <h4 id="amount-change">-</h4>
          </Button>
        </div>
        <div className="cart-input-center">
          <h3>x{props.count}</h3>
        </div>
        <div className="cart-input-right">
          <Button onClick={handleIncrement}>
            <h4 id="amount-change">+</h4>
          </Button>
        </div>
       
      </div>
    </div>
  );
}

export default CartInput;
