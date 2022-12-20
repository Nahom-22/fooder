import React from "react";
import CartInput from "../../UI/cartInput/CartInput";

function CartItem(props) {
    const price=props.foodPrice.toFixed(2)
  return (
    <div className="cart-item-container">
      <div className="cart-item-wrapper">
        <div className="cart-item-left">
          <h3>{props.foodName}</h3>
        </div>
        <div className="cart-item-center">
          <CartInput
            food={props.foodName}
            id={props.food.id}
            name={props.foodName}
            category={props.foodCategory}
            description={props.foodDescription}
            price={props.foodPrice}
            count={props.foodAmount}
          />
        </div>
        <div className="cart-item-right">
          <h3>{`$${price}`}</h3>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
