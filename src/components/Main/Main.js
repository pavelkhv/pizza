import React from 'react';
import { Route } from 'react-router-dom';

import Catalog from '../Catalog/Catalog';
import Order from '../Order/Order';

function Main() {
  return (
    <div>
      <Route exact path="/" component={Catalog} />
      <Route path="/order" component={Order} />
    </div>
  )
}

export default Main;
