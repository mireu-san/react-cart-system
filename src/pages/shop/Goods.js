import React, { useState } from "react";
import "./Goods.css";
import { DataContext } from "../../components/context/DataContext";

export const Goods = (props) => {
  const { id, name, price, image, link } = props.shopItemProps;
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="goods">
        <div>{id}</div>
        <img src={image} alt="thumbnail_image" />
        <div className="goods-name">{name}</div>
        <div className="goods-price">${price}</div>
        <button>
          <a href={link}>Official Store Page</a>
        </button>
        <div className="cart-button">
          <button onClick={() => setCount(count - 1)}>-</button>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </>
  );
};
