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

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
