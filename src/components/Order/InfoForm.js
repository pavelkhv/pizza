import React from "react";
import Dropdown from "react-dropdown";
import PhoneInput from "react-phone-input-2";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import TextInput from "./TextInput";

import ru from "date-fns/locale/ru";
import rus from "react-phone-input-2/lang/ru.json";

import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ru", ru);
setDefaultLocale("ru");

const PAYMENT = ["Наличные", "Картой (на сайте)", "Картой (курьеру)"];

function InfoForm({ info, setInfo }) {
  const onChange = (key, value) => {
    const state = { ...info };
    state[key] = value;
    setInfo(state);
  };

  return (
    <>
      <h3 className="order__subtitle">Информация:</h3>
      <form action="" className="order-form">
        <div className="order-form__wrap">
          <label htmlFor="" className="order-form__label">Телефон</label>
          <PhoneInput
            country={"by"}
            value={info.phone}
            onChange={(phone) => onChange("phone", phone)}
            localization={rus}
          />
        </div>

        <TextInput label="Имя" name="name" onChange={onChange} />

        <div className="order-form__wrap">
          <label htmlFor="" className="order-form__label">Время доставки</label>
          <DatePicker
            locale="ru"
            selected={info.date}
            onChange={(date) => onChange("date", date)}
            showTimeSelect
            timeFormat="p"
            timeIntervals={10}
            timeCaption="time"
            dateFormat="d MMMM, yyyy p"
          />
        </div>

        <div className="order-form__wrap">
          <label htmlFor="" className="order-form__label">Способ оплаты</label>
          <Dropdown
            options={PAYMENT}
            onChange={(item) => onChange("paymentType", item.value)}
            value={PAYMENT[0]}
          />
        </div>

        <div className="order-form__wrap">
          <label htmlFor="" className="order-form__label">Комментарий к заказу</label>
          <textarea
            type="text"
            className="order-form__input"
            onChange={(e) => onChange("comment", e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default InfoForm;
