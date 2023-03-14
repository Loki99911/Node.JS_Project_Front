import { createSlice } from '@reduxjs/toolkit';
import {
  getOwnRecipes,
  deleteOwnRecipe,
  addOwnRecipe,
  getFavorite,
  addFavorite,
  deleteFavorite,
  getOwnRecipeByID,
} from './ownRecipesOperations';

const pending = state => {
  state.isOwnRecipesFetching = true;
};
const rejected = state => {
  state.isOwnRecipesFetching = false;
};

const initialState = {
  isOwnRecipesFetching: false,
  ownRecipes: { recipes: [], total: 0 },
  favorites: { recipes: [], total: 0 },
  singleRecipe: null,
};

export const ingredientsSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload.recipes;
        state.ownRecipes.total = payload.total;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes.unshift(payload);
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes = state.ownRecipes.filter(
          recipe => recipe.idMeal !== payload.id
        );
        state.isOwnRecipesFetching = false;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.favorites.recipes = payload.recipes;
        state.favorites.total = payload.total;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.favorites.unshift(payload);
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.favorites = state.favorites.filter(
          recipe => recipe.idMeal !== payload.id
        );
        state.isOwnRecipesFetching = false;
      })
      .addCase(getOwnRecipeByID.fulfilled, (state, { payload }) => {
        state.singleRecipe = payload;
        state.isOwnRecipesFetching = false;
      })

      .addCase(getOwnRecipes.pending, pending)
      .addCase(addOwnRecipe.pending, pending)
      .addCase(deleteOwnRecipe.pending, pending)
      .addCase(getFavorite.pending, pending)
      .addCase(addFavorite.pending, pending)
      .addCase(getOwnRecipeByID.pending, pending)

      .addCase(getOwnRecipes.rejected, rejected)
      .addCase(addOwnRecipe.rejected, rejected)
      .addCase(deleteOwnRecipe.rejected, rejected)
      .addCase(getFavorite.rejected, rejected)
      .addCase(addFavorite.rejected, rejected)
      .addCase(getOwnRecipeByID.rejected, rejected),
});

export default ingredientsSlice.reducer;
