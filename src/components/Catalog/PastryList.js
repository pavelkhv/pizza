import React from "react";

function PastryList({ typesPastry, type, setType, size }) {
  return (
    <ul className="catalog-item__types">
      {typesPastry.map(pastry => {
        const disabled = pastry.type === "slim" && size === "small";
        const active = type === pastry.type;

        return (
          <li
            key={pastry.id}
            className={`${
              disabled ? "catalog-item__types-item_disabled" : 
              active ? "catalog-item__types-item_active" : "catalog-item__types-item"
            }`}
            onClick={() => (disabled ? {} : setType(pastry.type))}
          >
            {pastry.name}
          </li>
        );
      })}
    </ul>
  );
}

export default PastryList;
