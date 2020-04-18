import React from "react";

function TextInput({ name, label, onChange }) {
  return (
    <div className="order-form__wrap">
      <label htmlFor="" className="order-form__label">{label}</label>
      <input
        type="text"
        className="order-form__input"
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
}

export default TextInput;
