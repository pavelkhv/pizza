import React from "react";

function SizeList({ pizzasSize, size, setSize, setType, typesPastry }) {
  return (
    <ul className="catalog-item__radius">
      {pizzasSize.map(pizza => {
        const active = size.value === pizza.value;

        return (
          <li
            key={pizza.id}
            className={active ? "catalog-item__radius-item_active" : "catalog-item__radius-item"}
            onClick={() => {
              if (pizza.type === "small") setType(typesPastry[0]);
              setSize(pizza);
            }}
          >
            {`${pizza.value} см`}
          </li>
        );
      })}
    </ul>
  );
}

export default SizeList;
