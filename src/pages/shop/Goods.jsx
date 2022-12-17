import React, { useContext } from "react";
import "./Goods.css";
import { DataContext } from "../../components/context/DataContext";
import { AiFillLike, AiFillDislike } from "react-icons/ai"


export const Goods = (props) => {
  const { id, name, price, image } = props.shopItemProps;
  const { cartItems, addItemToCart, removeItemFromCart  } =
    useContext(DataContext);
  const cartItemStored = cartItems[id];

  return (
    // the item lists display here - 6 grid
    <div className="goods">
      <img src={image} alt="thumbnail_image" className="goods-image" />
        <p>
          <b>{name}</b>
        </p>
        <p>
          ${price}
        </p>
      <div className="cart-button">
      <button className="removeItemFromCartButton" onClick={() => removeItemFromCart(id)}> <AiFillDislike /> Remove </button>
      <button className="addToCartButton" onClick={() => addItemToCart(id)}> <AiFillLike /> Add it </button>
      {cartItemStored > 0 && <> ({cartItemStored}) </>}
      </div>
    </div>
  );
};
