import React from "react";
import { connect } from "react-redux";

import { addCart, removeCart, deleteCart } from "../../actions/index";

import ChangeButtons from "./ChangeButtons";

function CartList({ cart, addCart, removeCart, deleteCart }) {
  return (!!cart.length &&
    <ul className="cart-list">
      {
        cart.list.map(item => {
          const {pizza, pastry, size} = item;
          const pizzaParams = pizza[size.type][pastry.value];

          return (
            <li key={pizza.id + pastry.value + size.type} className="cart-item">
              <span 
                className="cart-item__delete"
                onClick={() => deleteCart(pizza, pastry, size)} 
              >X</span>
              <h4 className="cart-item__title">{pizza.title}</h4>
              <p className="cart-item__text">{pastry.name}, {size.value} см</p>
              <p className="cart-item__text">{pizza.description}</p>
              <div className="cart-item__footer">
                <div className="cart-item__info">
                  <span className="cart-item__price">{pizzaParams.price} руб.</span>
                  <span className="cart-item__weight">{pizzaParams.weight} гр</span>
                </div>

                <ChangeButtons 
                  item={item} 
                  addCart={addCart} 
                  removeCart={removeCart} 
                />
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addCart, removeCart, deleteCart })(CartList);
