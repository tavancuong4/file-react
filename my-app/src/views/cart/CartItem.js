import React, { useEffect, useState } from "react";
import "./CartItem.scss";

const CartItem = ({ cart, setCart, handleChange }) => {
  // console.log("cart", cart);
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let tong = 0;
    cart.map((item) => (tong += item.amount * item.price));
    setPrice(tong);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="button1">
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="button2">
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <hr />
      <div className="total">
        <span>Total price of you</span>
        <span>: {price} nghìn</span>
      </div>
    </article>
  );
};

export default CartItem;
