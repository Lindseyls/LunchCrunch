export const selectRestaurant = (restaurantId) => {
  return {
    type: 'select_restaurant',
    payload: restaurantId
  };
};
