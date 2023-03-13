import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getOwnRecipesAPI,
  deleteOwnRecipeAPI,
  addOwnRecipeAPI,
  getFavoriteAPI,
  addFavoriteAPI,
  removeFavoriteAPI,
  getOwnRecipeByIdAPI,
} from 'service/API/OwnRecipesAPI';

import { token } from 'redux/auth/authOperations';

export const getOwnRecipes = createAsyncThunk(
  'ownRecipes/getRecipes',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getOwnRecipesAPI();
      console.log('own recipes', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const addOwnRecipe = createAsyncThunk(
  'ownRecipes/addRecipe',
  async (body, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await addOwnRecipeAPI(body);
      console.log('own recipe successfully added', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const deleteOwnRecipe = createAsyncThunk(
  'ownRecipes/deleteRecipe',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await deleteOwnRecipeAPI(id);
      console.log('own recipe successfully deleted', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getOwnRecipeByID = createAsyncThunk(
  'ownRecipes/singleRecipeByID',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getOwnRecipeByIdAPI(id);
      console.log('own recipe', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'ownRecipes/addFavorite',
  async (idMeal, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await addFavoriteAPI({ idMeal });
      console.log('fav recipe successfully added', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFavorite = createAsyncThunk(
  'ownRecipes/getFavorite',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const { data } = await getFavoriteAPI();
      console.log('fav recipes', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'ownRecipes/deleteFavorite',
  async (idMeal, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await removeFavoriteAPI({ idMeal });
      console.log('fav recipe successfully deleted', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);
