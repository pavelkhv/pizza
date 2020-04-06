import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addCart } from "../../actions/index";

import CartList from "./CartList";

function Cart({ cart }) {
  const [sum, setSum] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const total = cart.list.map(({ pizza, pastry, size }) => {
      const pizzaParams = pizza[size.type][pastry.value];
      return pizzaParams.price * pizzaParams.count;
    }).reduce((acc, cur) => acc + cur, 0).toFixed(2);

    setSum(total)
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart-button" onClick={() => setOpenCart(!openCart)}>
        <span className="cart-button__price">{sum} BYN</span>
        <span className="cart-button__count">{cart.length}</span>
      </div>

      {openCart && 
        <div className="cart-modal">
          <div className="cart-modal__header">
            <h3 className="cart-modal__title">Корзина</h3>
          </div>

          <CartList />

          <div className="cart-modal__footer">
            <p className="cart-modal__total-price">Сумма заказа: {sum} руб.</p>
            <p className="cart-modal__total-count">Товаров: {cart.length}</p>
          </div>
        </div>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { addCart })(Cart);
