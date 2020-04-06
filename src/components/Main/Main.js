import React from "react";
import { Route } from "react-router-dom";

import Catalog from "../Catalog/Catalog";
import Order from "../Order/Order";

function Main() {
  return (
    <main className="main">
      <Route exact path="/" component={Catalog} />
      <Route path="/order" component={Order} />
    </main>
  )
}

export default Main;
