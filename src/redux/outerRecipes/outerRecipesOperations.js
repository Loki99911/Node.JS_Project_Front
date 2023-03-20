import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCategoryListAPI,
  getAllRecipesByCategoryAPI,
  getLimitedRecipesByCategoryAPI,
  getOneRecipeByIdAPI,
  getPopularRecipesAPI,
  getRecipesByQueryAPI,
} from 'service/API/TheMealAPI';

export const getCategoryList = createAsyncThunk(
  'outerRecipes/categoryList',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategoryListAPI();
      return data.meals;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getMainCategories = createAsyncThunk(
  'outerRecipes/mainCategories',
  async (_, { rejectWithValue }) => {
    const limit = 4;
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

      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getAllRecipesByCategory = createAsyncThunk(
  'outerRecipes/allRecipes',
  async (category, { rejectWithValue }) => {
    try {
      const data = await getAllRecipesByCategoryAPI(category);
      return data.meals;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getLimitedRecipesByCategory = createAsyncThunk(
  'outerRecipes/limitedRecipes',
  async (params, { rejectWithValue }) => {
    try {
      const { category, limit } = params;
      const data = await getLimitedRecipesByCategoryAPI(category, limit);
      return data.meals;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getOneRecipeById = createAsyncThunk(
  'outerRecipes/recipe',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getOneRecipeByIdAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  'outerRecipes/popular',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPopularRecipesAPI();
      return data.meals;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByQuery = createAsyncThunk(
  'outerRecipes/recipesByQuery',
  async (params, { rejectWithValue }) => {
    try {
      const { query, page, per_page } = params;
      const data = await getRecipesByQueryAPI(query, page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
