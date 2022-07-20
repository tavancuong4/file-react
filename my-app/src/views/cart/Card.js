import React from "react";

const Cards = ({ item, handleClick }) => {
  const { img, price, title } = item;
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Cards;
