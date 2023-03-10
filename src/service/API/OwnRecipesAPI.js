import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy.onrender.com';

//  ------------- OWN RECIPE -------------

export const getOwnRecipesAPI = (page, per_page) => {
  if (page && per_page) {
    return axios
      .get(`/own-recipes?page=${page}&per_page=${per_page}`)
      .then(({ data }) => {
        // console.log(data);
        return data;
      });
  }
  return axios.get(`/own-recipes`).then(({ data }) => {
    // console.log(data);
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

export const getOwnRecipeByIdAPI = id => {
  return axios.get(`/own-recipes/${id}`).then(({ data }) => {
    return data;
  });
};

// ------------- FAVORITE -------------

export const addFavoriteAPI = body => {
  return axios.post('/favorite', body).then(({ data }) => {
    return data;
  });
};

export const getFavoriteAPI = (page, per_page) => {
  if (page && per_page) {
    return axios
      .get(`/favorite?page=${page}&per_page=${per_page}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      });
  }
  return axios.get(`/favorite`).then(({ data }) => {
    // console.log(data);
    return data;
  });
};

export const removeFavoriteAPI = id => {
  return axios.delete(`/favorite/${id}`).then(({ data }) => {
    return data;
  });
};

// ------------- SHOPPING_LIST -------------

export const addShoppingIngredientAPI = body => {};

export const getShoppingIngredientAPI = () => {};

export const removeShoppingIngredientAPI = id => {};
