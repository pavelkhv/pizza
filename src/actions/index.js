export const addCart = (pizza, pastry, size) => ({
  type: 'ADD_CART',
  pizza,
  pastry,
  size
});

export const removeCart = (pizza, pastry, size) => ({
  type: 'REMOVE_CART',
  pizza,
  pastry,
  size
});

export const deleteCart = (pizza, pastry, size) => ({
  type: 'DELETE_CART',
  pizza,
  pastry,
  size
});