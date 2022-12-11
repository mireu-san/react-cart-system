import React from "react";

export const Goods = (props) => {
  const { id, name, price, image } = props.shopItemProps;
  // return <div>Goods{props.id}</div>;
  return (
    <>
      <div className="goods">
        <div>{id}</div>
        <img src={image} alt="thumbnail_image" />
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </>
  );
};
