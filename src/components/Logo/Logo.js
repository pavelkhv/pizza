import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/icons/logo.svg';

function Logo() {
  return (
    <Link to="/" className="header__wrapper">
      <img src={logo} className="header__logo" alt="logo"/>
      <div className="header-name">
        <span className="header-name__title">EX PIZZA</span>
        <span className="header-name__sub-title">Вкуснейшая пицца</span>
      </div>
    </Link>
  )
}

export default Logo;
