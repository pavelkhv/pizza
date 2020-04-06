const initialState = {
  list: [],
  length: 0
}

const changeCartPizza = (state, pizza, pastry, size, operation) => {
  let cart = {...state};
  let pizzaParams = pizza[size.type][pastry.value];
  let pizzaCount = pizzaParams.count;

  cart.length += operation ? operation : - pizzaCount;
  pizzaParams.count = operation ? pizzaCount + operation : 0;
  
  const includePizza = cart.list.find(item => {
    return item.pizza == pizza && item.pastry == pastry && item.size == size
  });

  if(!includePizza && operation > 0) {
    cart.list.push({pizza, pastry, size})
  };

  if(pizzaParams.count <= 0 && operation <= 0) {
    const index = cart.list.indexOf(includePizza);
    cart.list.splice(index, 1);
  }

  return cart;
}

const reducerCart = (state=initialState, {type, pizza, pastry, size}) => {
  switch(type) {
    case "ADD_CART": 
      return changeCartPizza(state, pizza, pastry, size, 1);
    case "REMOVE_CART":
      return changeCartPizza(state, pizza, pastry, size, -1);
    case "DELETE_CART":
      return changeCartPizza(state, pizza, pastry, size, 0);
    default:
      return state;
  }
}

export default reducerCart;