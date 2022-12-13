import React from "react";
import { ItemsList } from "../../components/ItemsList";
import { Goods } from "./Goods";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Anime Biased Exhibition</h1>
        <h3>(October ~ December, Q4 2022)</h3>
      </div>
      <div className="items">
        {ItemsList.map((item) => (
          <Goods shopItemProps={item} />
        ))}
      </div>
    </div>
  );
};
