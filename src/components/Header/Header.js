import React from "react";

import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Cart />
    </header>
  )
}

export default Header;

