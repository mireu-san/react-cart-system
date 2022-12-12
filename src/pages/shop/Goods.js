import React, { useState, useContext } from "react";
import "./Goods.css";
import { DataContext } from "../../components/context/DataContext";

export const Goods = (props) => {
  const { id, name, price, image, link } = props.shopItemProps;

  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(DataContext);
  // const { removeItemFromCart }

  // const [count, setCount] = useState(0);

  const cartItemStored = cartItems[id];

  return (
    <>
      <div className="goods">
        <div className="goods-id">{id}</div>
        <img src={image} alt="thumbnail_image" className="goods-image" />
        <div className="goods-name">{name}</div>
        <div className="goods-price">${price}</div>
        <button>
          <a href={link} className="goods-link">
            Official Store Page
          </a>
        </button>
        <div className="cart-button">
          {/* <button onClick={() => setCount(count - 1)}>-</button>
          {count} */}
          <button onClick={() => removeItemFromCart(id)}>-</button>
          {cartItemStored > -1 && <> ({cartItemStored}) </>}
          <button onClick={() => addItemToCart(id)}>+</button>
          {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        </div>
      </div>
    </>
  );
};
