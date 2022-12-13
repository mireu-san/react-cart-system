import React, { createContext, useState } from "react";
import { ItemsList } from "../ItemsList";

export const DataContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i <= ItemsList.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const DataContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const checkoutTotalSum = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ItemsList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Always check!
  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    checkoutTotalSum,
    // checkout,
  };

  // console.log(cartItems);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
