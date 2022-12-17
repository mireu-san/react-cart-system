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
        <h1>Your Items</h1>
      </div>
      <div className="cartItems">
        {ItemsList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p><b><h2> Estimated One-time Expenses </h2></b></p>
          <h1>${totalAmount}</h1>
          <button className="exploreButton" onClick={() => navigate("/")}> Explore Other Items <b>(다른 아이템 둘러보기)</b> </button>
          <h3>To remove, decrement the quantity of your love to ZERO by pressing dislike button.</h3>
          <h3>목록에서 아이템을 없애려면, Dislike 버튼을 눌러 호감도를 0으로 만드세요.</h3>
        </div>
      ) : (
        <h2> 계속 하려면 '좋아요' 버튼을 눌러서 추가 하세요. </h2>
      )}
    </div>
  );
};
