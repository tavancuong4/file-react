import React, { useState } from "react";
import list from "./data";
import Cards from "./Card";
import "./amazon.scss";

const Amazon = ({ handleClick }) => {
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   cart.push(item);
  //   // console.log("click", cart);
  // };
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}></Cards>
      ))}
    </section>
  );
};

export default Amazon;
