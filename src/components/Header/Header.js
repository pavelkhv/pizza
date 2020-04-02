import React from 'react';

import CartButton from '../Cart/CartButton';

import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header">
      <Logo />
      <CartButton />
    </header>
  )
}

export default Header;

