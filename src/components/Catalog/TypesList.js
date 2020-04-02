import React from 'react';

function TypesList({ typesPizza, currentType, setCurrentType }) {
  return (
    <ul className="catalog-header__list">
      {
        typesPizza.map(item => {
          const active = item.type == currentType;

          return (
            <li 
              key={item.id}
              className={`catalog-header__item ${
                active ? 'catalog-header__item_active' : ''
              }`}
              onClick={() => setCurrentType(item.type)}
            >
              {item.name}
            </li>
          )
        })
      }
    </ul>
  )
}

export default TypesList;
