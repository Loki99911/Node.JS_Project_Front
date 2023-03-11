import { createSlice } from '@reduxjs/toolkit';
import {
  getOwnRecipes,
  deleteOwnRecipe,
  addOwnRecipe,
  getFavorite,
  addFavorite,
} from './ownRecipesOperations';
const pending = state => {
  state.isOwnRecipesFetching = true;
};
const rejected = state => {
  state.isOwnRecipesFetching = false;
};

const initialState = {
  isOwnRecipesFetching: false,
  ownRecipes: [],
  favorites: [],
};

export const ingredientsSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes = payload;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes.unshift(payload);
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes = state.ownRecipes.filter(
          recipe => recipe.idMeal !== payload
        );
        state.isOwnRecipesFetching = false;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.favorites = payload;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.favorites.unshift(payload);
        state.isOwnRecipesFetching = false;
      })

      .addCase(getOwnRecipes.pending, pending)
      .addCase(addOwnRecipe.pending, pending)
      .addCase(deleteOwnRecipe.pending, pending)
      .addCase(getFavorite.pending, pending)
      .addCase(addFavorite.pending, pending)

      .addCase(getOwnRecipes.rejected, rejected)
      .addCase(addOwnRecipe.rejected, rejected)
      .addCase(deleteOwnRecipe.rejected, rejected)
      .addCase(getFavorite.rejected, rejected)
      .addCase(addFavorite.rejected, rejected),
});

export default ingredientsSlice.reducer;
