const initialState = {
  list: [],
  length: 0
}

const changeCartPizza = (state, pizza, pastry, size, operation) => {
  let cart = {...state};
  let pizzaCount = pizza[size.type][pastry.value].count;

  pizza[size.type][pastry.value].count = pizzaCount + operation;
  cart.length = cart.length + operation;

  const includePizza = cart.list.find(item => {
    return item.pizza == pizza && item.pastry == pastry && item.size == size
  });

  if(!includePizza && operation > 0) {
    cart.list.push({pizza, pastry, size})
  };

  if(pizzaCount <= 1 && operation < 0) {
    const index = cart.list.indexOf(includePizza);
    cart.list.splice(index, 1);
  }

  return cart;
}

const reducerCart = (state=initialState, {type, pizza, pastry, size}) => {
  switch(type) {
    case "ADD_CART": 
      const addedCart = changeCartPizza(state, pizza, pastry, size, 1);
      return addedCart;
    case "REMOVE_CART":
      const removedCart = changeCartPizza(state, pizza, pastry, size, -1);
      return removedCart;
    default:
      return state;
  }
}

export default reducerCart;