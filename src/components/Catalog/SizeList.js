import React from "react";

function SizeList({ pizzasSize, size, setSize, setType }) {
  return (
    <ul className="catalog-item__radius">
      {pizzasSize.map(pizza => {
        const active = size === pizza.type;

        return (
          <li
            key={pizza.id}
            className={`catalog-item__radius-item ${
              active ? "catalog-item__types-item_active" : ""
            }`}
            onClick={() => {
              if (pizza.type === "small") setType("traditional");
              setSize(pizza.type);
            }}
          >
            {`${pizza.size} см`}
          </li>
        );
      })}
    </ul>
  );
}

export default SizeList;
