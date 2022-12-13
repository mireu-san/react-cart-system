import React, { useContext } from "react";
import "./Goods.css";
import { DataContext } from "../../components/context/DataContext";

export const Goods = (props) => {
  const { id, name, price, image, link } = props.shopItemProps;
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(DataContext);
  const cartItemStored = cartItems[id];

  return (
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
        <button onClick={() => removeItemFromCart(id)}>-</button>
        {cartItemStored > -1 && <> ({cartItemStored}) </>}
        <button onClick={() => addItemToCart(id)}>+</button>
      </div>
    </div>
  );
};
