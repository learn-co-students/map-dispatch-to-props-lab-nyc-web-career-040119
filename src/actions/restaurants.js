export const addRestaurant = (restaurant) => {
  console.log("restaurant", restaurant)
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
