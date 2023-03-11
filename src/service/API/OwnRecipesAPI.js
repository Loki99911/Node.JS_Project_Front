import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy.onrender.com';

//  ------------- OWN RECIPE -------------

export const getOwnRecipesAPI = () => {
  return axios.get('/own-recipes').then(({ data }) => {
    return data;
  });
};

export const addOwnRecipeAPI = body => {
  return axios.post('/own-recipes', body).then(({ data }) => {
    return data;
  });
};

export const deleteOwnRecipeAPI = id => {
  return axios.delete(`/own-recipes/${id}`).then(({ data }) => {
    return data;
  });
};

// ------------- FAVORITE -------------

export const addFavoriteAPI = body => {
  return axios.post('/favorite', body).then(({ data }) => {
    return data;
  });
};

export const getFavoriteAPI = () => {
  return axios.get('/favorite').then(({ data }) => {
    return data;
  });
};

export const removeFavoriteAPI = id => {};

// ------------- SHOPPING_LIST -------------

export const addShoppingIngredientAPI = body => {};

export const getShoppingIngredientAPI = () => {};

export const removeShoppingIngredientAPI = id => {};
