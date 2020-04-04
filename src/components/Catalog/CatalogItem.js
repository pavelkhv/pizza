import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addCart } from '../../actions/index';

import SizeList from './SizeList';
import PastryList from './PastryList';
import ChangeButtons from '../Cart/ChangeButtons';

const TYPES_PASTRY = [
  {id: 0, value: "traditional", name: "Традиционное"}, 
  {id: 1, value: "slim", name: "Тонкое"}
];

const RADIUS_PIZZA = [
  {id: 0, type: "small", value: 22}, 
  {id: 1, type: "medium", value: 30}, 
  {id: 2, type: "large", value: 36}
];

function CatalogItem({ pizza, cart, addCart }) {
  const [type, setType] = useState(TYPES_PASTRY[0]);
  const [size, setSize] = useState(RADIUS_PIZZA[0]);

  const paramsPizza = pizza[size.type][type.value];
  const item = {pizza, pastry: type, size};

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
          typesPastry={TYPES_PASTRY}
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

        {paramsPizza.count 
          ? <ChangeButtons item={item}/> 
          : <button 
              className="catalog-item__footer-button"
              onClick={() => addCart(pizza, type, size)}
            >В корзину</button>
        }
      </div>
    </li>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { addCart })(CatalogItem);
