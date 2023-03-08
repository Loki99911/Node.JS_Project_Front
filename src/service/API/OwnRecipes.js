import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy.onrender.com';

//  ------------- OWN RECIPE -------------

export const getAllOwnRecipesAPI = () => {};

export const addOwnRecipeAPI = body => {};

// ------------- FAVORITE -------------

export const addFavoriteAPI = body => {};

export const getFavoriteAPI = () => {};

export const removeFavoriteAPI = id => {};

// ------------- SHOPPING_LIST -------------

export const addShoppingIngredientAPI = body => {};

export const getShoppingIngredientAPI = () => {};

export const removeShoppingIngredientAPI = id => {};
