import React, { useState } from 'react';

import SizeList from './SizeList';
import PastryList from './PastryList';

const TYPES_PASTRY = [
  {id: 0, type: "traditional", name: "Традиционное"}, 
  {id: 1, type: "slim", name: "Тонкое"}
];

const RADIUS_PIZZA = [
  {id: 0, type: "small", size: 22}, 
  {id: 1, type: "medium", size: 30}, 
  {id: 2, type: "large", size: 36}
];

function CatalogItem({ pizza }) {
  const [type, setType] = useState('traditional');
  const [size, setSize] = useState('small');

  const paramsPizza = pizza[size][type];

  return (
    <li className="catalog-item">
      <div className="">
        <img 
          src={require(`../../assets/img/pizzas/${pizza.name}.png`)} 
          className="catalog-item__img" 
          alt={pizza.name}
        />
      </div>
      <h3 className="catalog-item__title">{pizza.title}</h3>
      <p className="catalog-item__description">{pizza.description}</p>
      <div className="catalog-item__params">
        <PastryList 
          typesPastry={TYPES_PASTRY}
          type={type}
          setType={setType}
          size={size}
        />

        <SizeList 
          pizzasSize={RADIUS_PIZZA} 
          size={size}
          setSize={setSize}
          setType={setType}
        />
      </div>
      
      <div className="catalog-item__footer">
        <div className="catalog-item__footer-info">
          <span className="catalog-item__footer-price">{paramsPizza.price} руб.</span>
          <span className="catalog-item__footer-weight">{paramsPizza.weight} гр</span>
        </div>

        <button className="catalog-item__footer-button">В корзину</button>
      </div>
    </li>
  )
}

export default CatalogItem;
