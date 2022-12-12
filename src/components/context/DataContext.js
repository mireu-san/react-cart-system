import React, { createContext, useState } from "react";
import { ItemsList } from "../ItemsList";

export const DataContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ItemsList.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const DataContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addItemToCart, removeItemFromCart };

  // console.log(cartItems);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
