import React, { useEffect, useState } from "react";
import Narbar from "./narbar";
import "./Cart.scss";
import Amazon from "./amazon";
import CartItem from "./CartItem";

const Cart = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    // console.log("set", arr);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);
  return (
    <React.Fragment>
      <div>Mời quý khách mua hoa quả</div>
      <Narbar setShow={setShow} size={cart.length}></Narbar>

      {show ? (
        <Amazon handleClick={handleClick}></Amazon>
      ) : (
        <CartItem
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
        ></CartItem>
      )}
    </React.Fragment>
  );
};

export default Cart;
