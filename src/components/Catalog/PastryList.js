import React from "react";

function PastryList({ typesPastry, type, setType, size }) {
  return (
    <ul className="catalog-item__types">
      {typesPastry.map(pastry => {
        const disabled = pastry.value === "slim" && size.type === "small";
        const active = type.value === pastry.value;

        return (
          <li
            key={pastry.id}
            className={
              disabled ? "catalog-item__types-item_disabled" : 
              active ? "catalog-item__types-item_active" : "catalog-item__types-item"
            }
            onClick={() => (disabled ? {} : setType(pastry))}
          >
            {pastry.name}
          </li>
        );
      })}
    </ul>
  );
}

export default PastryList;
