import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCategoryListAPI,
  getAllRecipesByCategoryAPI,
  getLimitedRecipesByCategoryAPI,
  getOneRecipeByIdAPI,
  getPopularRecipesAPI,
  getRecipesByQueryAPI,
} from 'service/API/TheMealAPI';

import { token } from 'redux/auth/authOperations';

export const getCategoryList = createAsyncThunk(
  'outerRecipes/categoryList',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getCategoryListAPI();
      // console.log('categories list', data.meals);
      return data.meals;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getMainCategories = createAsyncThunk(
  'outerRecipes/mainCategories',
  async (_, { rejectWithValue, getState }) => {
    const limit = 4;
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const breakfast = await getLimitedRecipesByCategoryAPI(
        'breakfast',
        limit
      );
      const miscellaneous = await getLimitedRecipesByCategoryAPI(
        'miscellaneous',
        limit
      );
      const vegan = await getLimitedRecipesByCategoryAPI('vegan', limit);
      const desserts = await getLimitedRecipesByCategoryAPI('dessert', limit);

      const data = {
        breakfast: breakfast.meals,
        miscellaneous: miscellaneous.meals,
        vegan: vegan.meals,
        desserts: desserts.meals,
      };

      console.log('main recipes', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getAllRecipesByCategory = createAsyncThunk(
  'outerRecipes/allRecipes',
  async (category, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getAllRecipesByCategoryAPI(category);
      console.log('all recipes by category', data.meals);
      return data.meals;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getLimitedRecipesByCategory = createAsyncThunk(
  'outerRecipes/limitedRecipes',
  async (params, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const { category, limit } = params;
      const data = await getLimitedRecipesByCategoryAPI(category, limit);
      console.log('limited recipes', data.meals);
      return data.meals;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getOneRecipeById = createAsyncThunk(
  'outerRecipes/recipe',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getOneRecipeByIdAPI(id);
      console.log('1 recipe', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  'outerRecipes/popular',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getPopularRecipesAPI();
      // console.log('popular', data.meals);
      return data.meals;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByQuery = createAsyncThunk(
  'outerRecipes/recipesByQuery',
  async (params, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const { query, page, per_page } = params;
      const data = await getRecipesByQueryAPI(query, page, per_page);
      console.log('recipes by search query', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);
