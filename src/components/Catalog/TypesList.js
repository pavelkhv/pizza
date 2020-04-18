import React from "react";

function TypesList({ typesPizza, currentType, setCurrentType }) {
  return (
    <ul className="catalog-header__list">
      {typesPizza.map(item => {
        const active = item.value === currentType.value;

        return (
          <li
            key={item.id}
            className={
              active ? "catalog-header__item_active" : "catalog-header__item"
            }
            onClick={() => setCurrentType(item)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default TypesList;
