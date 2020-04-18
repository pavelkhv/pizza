import React from "react";
import Dropdown from "react-dropdown";

const ADDRESSES = ["м. Восток", "м. Каменная горка", "м. Немига"];

function PizzeriaAddress({ pizzeriaAddress, onChange }) {
  return (
    <>
      <h3 className="order__subtitle">Выберите пиццерию:</h3>
      <div className="order-form__wrap">
        <label htmlFor="" className="order-form__label">Пиццерия</label>
        <Dropdown
          options={ADDRESSES}
          onChange={(item) => onChange(item.value)}
          value={pizzeriaAddress}
          placeholder="Выберите пиццерию"
        />
      </div>
    </>
  );
}

export default PizzeriaAddress;
