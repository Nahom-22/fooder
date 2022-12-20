import React, { useContext } from "react";
import { cartContext } from "../../../store/cart-context";
import Input from "../../UI/input/Input";

import "./mealItem.css";

const MealItem = (props) => {
  const ctxCart = useContext(cartContext);
  const price = props.price.toFixed(2);
  const getAmount = (amountValue) => {
    ctxCart.onAddToCart({
      id: props.id,
      name: props.name,
      description: props.description,
      category: props.category,
      price: props.price,
      amount: amountValue,
    });
    ctxCart.bumpCart();
  };
  console.log(props.image)
  return (
    <div className="meal-item-container">
      <div className="meal-item-top">
      </div>
      <div className="meal-item-middle">
        <h4 id="meal-name">{props.name}</h4>
        <p>{props.description}</p>
        <p>{`$${price}`}</p>
      </div>
      <div className="meal-item-bottom">
        <Input type="number" onGetAmount={getAmount} />
      </div>
    </div>
  );
};

export default MealItem;
