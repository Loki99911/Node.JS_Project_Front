import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy.onrender.com';

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category/list').then(({ data }) => {
    return data;
  });
};

export const getAllRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/category/${category}`).then(({ data }) => {
    return data;
  });
};

export const getLimitedRecipesByCategoryAPI = (category, limit) => {
  return axios.get(`/recipes/${category}/${limit}`).then(({ data }) => {
    return data;
  });
};

export const getOneRecipeByIdAPI = id => {
  return axios.get(`/recipes/${id}`).then(({ data }) => {
    return data;
  });
};

export const getPopularRecipesAPI = () => {
  return axios.get('/recipes/popular').then(({ data }) => {
    return data;
  });
};

export const getRecipesByQueryAPI = query => {
  return axios.get(`/recipes/search/${query}`).then(({ data }) => {
    return data;
  });
};

export const getAllIngredientsAPI = () => {
  return axios.get('/ingredients/list').then(({ data }) => {
    return data;
  });
};

export const getRecipesByIngredientAPI = ingredient => {
  return axios.get(`/ingredients/${ingredient}`).then(({ data }) => {
    return data;
  });
};
