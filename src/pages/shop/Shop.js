import React from "react";
import { ItemsList } from "../../components/ItemsList";
import { Goods } from "./Goods";
import "./Shop.css";

export const Shop = () => {
  // render() {
  // const shopItem = shopItems[0];
  return (
    <div className="shop">
      <div className="shop-title">Shop Title</div>
      <div className="items">
        {ItemsList.map((item) => (
          // data is props which I named by myself
          <Goods shopItemProps={item} />
        ))}
      </div>
      {/* <Item
        id={shopItem.id}
        name={shopItem.name}
        price={shopItem.price}
        image={shopItem.image}
      /> */}
    </div>
  );
};
// }
