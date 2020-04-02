import React, { useState } from "react";

import pizzasList from "../../assets/js/pizzasList";

import CatalogItem from "./CatalogItem";
import TypesList from "./TypesList";

const TYPES_PIZZA = [
  { id: 0, type: "all", name: "Все" },
  { id: 1, type: "meat", name: "Мясные" },
  { id: 2, type: "spicy", name: "Острые" },
  { id: 3, type: "vegan", name: "Вегетарианские" }
];

function Catalog() {
  const [currentType, setCurrentType] = useState("all");

  const filteredPizza =
    currentType === "all" ? pizzasList : 
    pizzasList.filter(pizza => currentType === pizza.type);

  return (
    <div className="catalog">
      <div className="catalog-header">
        <TypesList
          typesPizza={TYPES_PIZZA}
          currentType={currentType}
          setCurrentType={setCurrentType}
        />

        <div className="catalog-header__sort">
          <span>Сортировка по: </span>
          <span className="catalog-header__sort-type">популярности</span>
        </div>
      </div>
      <div className="catalog-main">
        <h2 className="catalog-main__title">Все пиццы</h2>
        <ul className="catalog-main__list">
          {
            filteredPizza.map(pizza => <CatalogItem pizza={pizza} key={pizza.id} />)
          }
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
