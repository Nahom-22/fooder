import React, { useEffect, useReducer, useState } from "react";

import { cartContext } from "../store/cart-context";

const handleCart = (state, action) => {
  let updatedItem;
  let updatedItems;
  let updatedAmount;
  if (action.type === "ADD_TO_CART") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const itemToBeUpdated = state.items[itemIndex];
    console.log(itemToBeUpdated)
    if (itemToBeUpdated) {
      updatedItem = { ...itemToBeUpdated, amount: itemToBeUpdated.amount + action.value.amount };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
      updatedAmount = state.amountTotal + action.value.amount * action.value.price;
      return {
        items: updatedItems,
        amountTotal: updatedAmount,
      };
    } else {
      updatedItems = state.items.concat(action.value);
      updatedAmount = state.amountTotal + action.value.amount * action.value.price;
      return {
        items: updatedItems,
        amountTotal: updatedAmount,
      };
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    const itemIndex = state.items.findIndex((item) => item.id === action.value);
    const itemToBeUpdated=state.items[itemIndex]
    updatedItem = { ...itemToBeUpdated, amount: itemToBeUpdated.amount - 1 };
    updatedItems = [...state.items];
    updatedItems[itemIndex] = updatedItem;
    updatedAmount = state.amountTotal -  updatedItem.price;
    return {
      items: updatedItems,
      amountTotal: updatedAmount,
    };
  } else if (action.type === "DELETE_FROM_CART") {
    const itemIndex = state.items.findIndex((item) => item.id === action.value);
    const itemToBeDeleted=state.items[itemIndex]    
    updatedItems = state.items.map((item) => item.id !== itemToBeDeleted.id);
    updatedAmount = state.amountTotal - itemToBeDeleted.amount * itemToBeDeleted.price;
    return {
      items: updatedItems,
      amountTotal: updatedAmount,
    };
  } else {
    return {
      items: [],
      amountTotal: 0,
    };
  }
};

function CartContextProvider(props) {
  const[isHighlighted, setIsHighlighted]=useState('cart-btn')
  const bump=()=>{
    setIsHighlighted('cart-btn-bump')
  }
    useEffect(()=>{
      const timer=setTimeout(()=>{
          setIsHighlighted('cart-btn')
          console.log('in effect')
      },300)
      return ()=>clearTimeout(timer)
    },[isHighlighted])
  
  const [showItems, setShowItems] = useState(false);
  const [cart, dispatchCart] = useReducer(handleCart, {
    items: [],
    amountTotal: 0,
  });
  const showCart = () => {
    setShowItems(true);
  };
  const addToCart = (item) => {
    dispatchCart({ type: "ADD_TO_CART", value: item });
  };
  const removeFromCart = (id) => {
    dispatchCart({ type: "REMOVE_FROM_CART", value: id });
  };
  const deleteFromCart = (id) => {
    dispatchCart({ type: "DELETE_FROM_CART", value: id });
  };

  return (
    <cartContext.Provider
      value={{
        onShowCart: showCart,
        onAddToCart: addToCart,
        onRemoveFromCart: removeFromCart,
        onDeleteFromCart: deleteFromCart,
        showCart: showItems,
        cartItems: cart.items,
        totalAmount: cart.amountTotal,
        bumpCart:bump,
        cartClassName:isHighlighted
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
