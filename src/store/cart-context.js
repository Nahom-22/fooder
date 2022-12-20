import React from "react";

export const cartContext = React.createContext({
  onShowCart: () => {},
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
  onDeleteFromCart: () => {},
  showCart: false,
  cartItems: [],
  totalAmount: 0,
  bumpCart:()=>{},
  cartClassName:'cart-btn',
});
