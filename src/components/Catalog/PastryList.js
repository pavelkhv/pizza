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
            className={`catalog-item__types-item ${
              disabled ? "catalog-item__types-item_disabled" : 
              active ? "catalog-item__types-item_active" : ""
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
