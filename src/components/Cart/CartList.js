import React from 'react';

import ChangeButtons from './ChangeButtons';

function CartList({ cart }) {
  return (!!cart.length &&
    <ul className="cart-list">
      {
        cart.list.map(item => {
          const {pizza, pastry, size} = item;
          const pizzaParams = pizza[size.type][pastry.value];

          return (
            <li key={pizza.id + size.type} className="cart-item">
              <h4 className="cart-item__title">{pizza.title}</h4>
              <p className="cart-item__text">{pastry.name}, {size.value} см</p>
              <p className="cart-item__text">{pizza.description}</p>
              <div className="cart-item__footer">
                <div className="cart-item__info">
                  <span className="cart-item__price">{pizzaParams.price} руб.</span>
                  <span className="cart-item__weight">{pizzaParams.weight} гр</span>
                </div>

                <ChangeButtons item={item} />
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CartList;
