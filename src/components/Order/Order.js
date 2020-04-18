import React, { useState } from "react";

import CartList from "../Cart/CartList";
import AddressForm from "./AddressForm";
import InfoForm from "./InfoForm";
import PizzeriaAddress from "./PizzeriaAddress";

import "react-dropdown/style.css";

const ORDER_TYPES = [
  { id: 0, name: "Доставка" },
  { id: 1, name: "Самовывоз" },
];

const initialAddressState = {
  city: "Минск",
  street: "",
  house: "",
  flat: "",
  floor: "",
  entrance: "",
};

const initialInfoState = {
  phone: "",
  name: "",
  date: new Date(),
  paymentType: "Наличные",
  comment: "",
};

function Order() {
  const [order, setOrder] = useState(ORDER_TYPES[0]);
  const [pizzeriaAddress, setPizzeriaAddress] = useState(null);
  const [address, setAddress] = useState(initialAddressState);
  const [info, setInfo] = useState(initialInfoState);

  return (
    <div className="order">
      <h2 className="order__title">Оформление заказа</h2>
      <div className="order-container">
        <div className="order-block">
          <ul className="order-block__list">
            {ORDER_TYPES.map((item) => (
              <li
                key={item.id}
                className={order.id == item.id ? "order-block__item_active": "order-block__item"}
                onClick={() => setOrder(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {order.id == 0 
            ? <AddressForm address={address} setAddress={setAddress} />
            : <PizzeriaAddress pizzeriaAddress={pizzeriaAddress} onChange={setPizzeriaAddress} />
          }

          <InfoForm info={info} setInfo={setInfo} />

          <button className="cart-modal__order">Оформить</button>
        </div>

        <div className="order-sidebar">
          <CartList />
        </div>
      </div>
    </div>
  );
}

export default Order;
