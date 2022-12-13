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
        <h1>Your Bookmarked Items</h1>
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
          <p> Estimated Expenditure (예상 지출 금액): ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Explore Other Items </button>
          <h3>To remove, decrement the quantity of your item to ZERO.</h3>
          <h3>목록에서 아이템을 지우려면 수량을 0으로 입력하세요.</h3>
        </div>
      ) : (
        <h1> Cart is Empty </h1>
      )}
    </div>
  );
};
