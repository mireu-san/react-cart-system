import React from "react";
import { ItemsList } from "../../components/ItemsList";
import { Goods } from "./Goods";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Anime Biased Shop</h1>
      </div>
      <div className="items">
        {ItemsList.map((item) => (
          <Goods shopItemProps={item} />
        ))}
      </div>
    </div>
  );
};
