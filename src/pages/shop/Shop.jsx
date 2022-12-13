import React from "react";
import { ItemsList } from "../../components/ItemsList";
import { Goods } from "./Goods";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Anime Biased Exhibition Room</h1>
        <h2>How much money are you going to spend?</h2>
      </div>
      <div className="items">
        {ItemsList.map((item) => (
          <Goods shopItemProps={item} />
        ))}
      </div>
    </div>
  );
};
