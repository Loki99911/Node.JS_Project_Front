import { createSlice } from '@reduxjs/toolkit';
import {
  getAllIngredients,
  getRecipesByIngredient,
} from './ingredientsOperations';

import { logOut } from 'redux/auth/authOperations';

const pending = state => {
  state.isIngredientsFetching = true;
};
const rejected = state => {
  state.isIngredientsFetching = false;
};

const initialState = {
  isIngredientsFetching: false,
  ingredients: [],
  recipesByIngredients: {
    totalHits: 0,
    meals: [],
  },
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.isIngredientsFetching = false;
      })
      .addCase(getRecipesByIngredient.fulfilled, (state, { payload }) => {
        state.recipesByIngredients.meals = payload.meals;
        state.recipesByIngredients.totalHits = payload.totalHits;
        state.isIngredientsFetching = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))

      .addCase(getAllIngredients.pending, pending)
      .addCase(getRecipesByIngredient.pending, pending)

      .addCase(getAllIngredients.rejected, rejected)
      .addCase(getRecipesByIngredient.rejected, state => {
        state.isIngredientsFetching = false;
        state.recipesByIngredients.meals = [];
        state.recipesByIngredients.totalHits = 0;
      }),
});

export default ingredientsSlice.reducer;
