import React from "react";

const Narbar = ({ setShow, size }) => {
  return (
    <div className="nav">
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shoping Cương chí
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default Narbar;
