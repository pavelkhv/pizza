import React from "react";

function ChangeButtons({ item, addCart, removeCart }) {
  const { pizza, pastry, size } = item;
  const pizzaParams = pizza[size.type][pastry.value];

  return (
    <div className="">
      <button 
        className="cart-item__footer-button" 
        onClick={() => removeCart(pizza, pastry, size)}
      >-</button>

      <span className="cart-item__footer-count">{pizzaParams.count}</span>
      
      <button
        className="cart-item__footer-button"
        onClick={() => addCart(pizza, pastry, size)}
      >+</button>
    </div>
  );
}

export default ChangeButtons;
