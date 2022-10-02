import React from "react";

const Product = (props) => {
  const { name, img, category, seller, price, ratings } = props.product;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
