import React, { useState } from "react";

import pizzasList from "../../assets/js/pizzasList";

import CatalogItem from "./CatalogItem";
import TypesList from "./TypesList";
import SortList from './SortList';

const TYPES_PIZZA = [
  { id: 0, value: "all", name: "Все" },
  { id: 1, value: "meat", name: "Мясные" },
  { id: 2, value: "spicy", name: "Острые" },
  { id: 3, value: "vegan", name: "Вегетарианские" }
];

const SORT_TYPES = [
  {id: 0, name: "популярности"},
  {id: 1, name: "названию"}
]

function Catalog() {
  const [currentType, setCurrentType] = useState(TYPES_PIZZA[0]);
  const [sortType, setSortType] = useState(SORT_TYPES[0]);

  const filteredPizza =
    currentType.value === "all" ? pizzasList : 
    pizzasList.filter(pizza => currentType.value === pizza.type);

  const sortList = [...filteredPizza].sort((a, b) => {
    return a.title > b.title ? 1 : -1
  });

  const renderList = sortType.id === 0 ? filteredPizza : sortList;

  return (
    <div className="catalog">
      <div className="catalog-header">
        <TypesList
          typesPizza={TYPES_PIZZA}
          currentType={currentType}
          setCurrentType={setCurrentType}
        />

        <SortList 
          sortTypes={SORT_TYPES}
          sortType={sortType}
          setSortType={setSortType}
        />
      </div>
      <div className="catalog-main">
        <h2 className="catalog-main__title">{currentType.name} пиццы</h2>
        <ul className="catalog-main__list">
          {
            renderList.map(pizza => <CatalogItem pizza={pizza} key={pizza.id} />)
          }
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
