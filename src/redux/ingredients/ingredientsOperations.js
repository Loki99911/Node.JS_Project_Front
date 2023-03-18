import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllIngredientsAPI,
  getRecipesByIngredientAPI,
} from 'service/API/TheMealAPI';

import {
  getShoppingIngredientAPI,
  removeShoppingIngredientAPI,
  addShoppingIngredientAPI,
} from 'service/API/OwnRecipesAPI';

export const getAllIngredients = createAsyncThunk(
  'ingredients/list',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllIngredientsAPI();
      // console.log('ingredients list', data.meals);
      return data.meals;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'ingredients/recipes',
  async (params, { rejectWithValue }) => {
    try {
      const { ingredient, page, per_page } = params;
      const data = await getRecipesByIngredientAPI(ingredient, page, per_page);
      console.log('all recipes by ingredient', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getShoppingIngredient = createAsyncThunk(
  'ingredients/getShoppingList',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getShoppingIngredientAPI();
      console.log('shopping list', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const addShoppingIngredient = createAsyncThunk(
  'ingredients/addShoppingIngredient',
  async (body, { rejectWithValue }) => {
    try {
      const data = await addShoppingIngredientAPI(body);
      console.log('add shopping ingredient', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeShoppingIngredient = createAsyncThunk(
  'ingredients/removeShoppingIngredient',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeShoppingIngredientAPI(id);
      console.log('remove Shopping Ingredient', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);
