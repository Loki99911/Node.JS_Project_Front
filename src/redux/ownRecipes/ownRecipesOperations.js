import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  getOwnRecipesAPI,
  deleteOwnRecipeAPI,
  addOwnRecipeAPI,
  getFavoriteAPI,
  addFavoriteAPI,
  removeFavoriteAPI,
  getOwnRecipeByIdAPI,
} from 'service/API/OwnRecipesAPI';

export const getOwnRecipes = createAsyncThunk(
  'ownRecipes/getRecipes',
  async ({ page, per_page }, { rejectWithValue }) => {
    try {
      const data = await getOwnRecipesAPI(page ?? null, per_page ?? null);
      console.log('own recipes', data);
      return { recipes: data.meals, total: data.totalHits };
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const addOwnRecipe = createAsyncThunk(
  'ownRecipes/addRecipe',
  async (body, { rejectWithValue }) => {
    try {
      const data = await addOwnRecipeAPI(body);
      toast.success('Recipe has been added', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return data;
    } catch (error) {
      toast.error('Recipe hasn`t been added', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return rejectWithValue(error.response.status);
    }
  }
);

export const deleteOwnRecipe = createAsyncThunk(
  'ownRecipes/deleteRecipe',
  async (id, { rejectWithValue }) => {
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
  async (id, { rejectWithValue }) => {
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
  async (id, { rejectWithValue }) => {
    try {
      const data = await addFavoriteAPI({ idMeal: id });
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
  async ({ page, per_page }, { rejectWithValue }) => {
    try {
      const data = await getFavoriteAPI(page ?? null, per_page ?? null);
      console.log('fav recipes', {
        recipes: data.meals,
        total: data.totalHits,
      });
      return { recipes: data.meals, total: data.totalHits };
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'ownRecipes/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeFavoriteAPI(id);
      console.log('fav recipe successfully deleted', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);
