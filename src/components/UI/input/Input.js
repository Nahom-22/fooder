import React, { useState } from "react";
import Button from "../button/Button";

const Input = (props) => {
  const [amount, setAmount] = useState();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const amountValue = parseInt(amount);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onGetAmount(amountValue)
  };
  return (
    <form className="meal-form" onSubmit={handleSubmit}>
      <input
        className={props.className}
        type={props.type}
        onChange={handleChange}
        min={1}
      />
      <Button className="submit-btn">Add To Cart</Button>
    </form>
  );
};

export default Input;
