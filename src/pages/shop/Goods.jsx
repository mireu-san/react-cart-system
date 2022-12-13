import React, { useContext } from "react";
import "./Goods.css";
import { DataContext } from "../../components/context/DataContext";

export const Goods = (props) => {
  const { id, name, price, image } = props.shopItemProps;
  const { cartItems, addItemToCart  } =
    useContext(DataContext);
  const cartItemStored = cartItems[id];

  return (
    <div className="goods">
      <div className="goods-id">{id}</div>
      <img src={image} alt="thumbnail_image" className="goods-image" />
        <p>
          <b>{name}</b>
        </p>
        <p>
          ${price}
        </p>
      <div className="cart-button">
        {/* <button onClick={() => removeItemFromCart(id)}>-</button> */}    
        <button className="addToCartButton" onClick={() => addItemToCart(id)}>Add Bookmark {cartItemStored > 0 && <> ({cartItemStored}) </>}</button>
      </div>
    </div>
  );
};
