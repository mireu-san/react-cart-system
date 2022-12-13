import React, { useContext } from "react";
import { ItemsList } from "../../components/ItemsList";
import { DataContext } from "../../components/context/DataContext";
import { CartItem } from "./CartItem";
import "./Cart.css";

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, checkoutTotalSum } = useContext(DataContext);
  const totalAmount = checkoutTotalSum();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {ItemsList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Back to the list </button>
        </div>
      ) : (
        <h1> Cart is Empty </h1>
      )}
    </div>
  );
};
