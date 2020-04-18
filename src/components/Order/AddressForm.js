import React from "react";
import Dropdown from "react-dropdown";

import TextInput from "./TextInput";

const CITIES = ["Минск", "Гродно", "Гомель", "Могилев"];

function AddressForm({ address, setAddress }) {
  const onChange = (key, value) => {
    const state = { ...address };
    state[key] = value;
    setAddress(state);
  };

  return (
    <>
      <h3 className="order__subtitle">Адрес доставки:</h3>
      <form action="" className="order-form">
        <div className="order-form__wrap">
          <label htmlFor="" className="order-form__label">Город</label>
          <Dropdown
            options={CITIES}
            onChange={(item) => onChange("city", item.value)}
            value={address.city}
          />
        </div>
        <TextInput label="Улица" name="street" onChange={onChange} />
        <TextInput label="Номер дома" name="house" onChange={onChange} />
        <TextInput label="Квартира" name="flat" onChange={onChange} />
        <TextInput label="Этаж" name="floor" onChange={onChange} />
        <TextInput label="Подъезд" name="entrance" onChange={onChange} />
      </form>
    </>
  );
}

export default AddressForm;
