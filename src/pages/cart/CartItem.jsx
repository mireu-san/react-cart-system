import React, { useContext } from "react";
import { DataContext } from "../../components/context/DataContext";
import { AiFillLike, AiFillDislike } from "react-icons/ai"

export const CartItem = (props) => {
  const { id, name, price, image, link } = props.data;
  const { cartItems, addItemToCart, removeItemFromCart, updateCartItemCount } =
    useContext(DataContext);

  return (
    <div className="cartItem">
      <img src={image} alt="goods_coverimage" />
      <div className="cartDescription">
        <p>
          <b>{name}</b>
        </p>
        <p style={{ margin: "0px" }}>${price}</p>
        <button>
        <a href={link} className="goods-link" style={{ textDecoration: "none" }}>
          CLICK HERE TO VISIT THE STORE PAGE
        </a>
      </button>
        <div className="countUpdator">
          <button onClick={() => removeItemFromCart(id)}> <AiFillDislike /> Dislike </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            style={{margin: "10px 10px"}}
          />
          <button onClick={() => addItemToCart(id)}> <AiFillLike /> Like </button>
        </div>
      </div>
    </div>
  );
};
