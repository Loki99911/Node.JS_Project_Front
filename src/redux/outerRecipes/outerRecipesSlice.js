import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoryList,
  getLimitedRecipesByCategory,
  getAllRecipesByCategory,
  getOneRecipeById,
  getPopularRecipes,
  getMainCategories,
  getRecipesByQuery,
} from './outerRecipesOperations';

import { getRecipesByIngredient } from 'redux/ingredients/ingredientsOperations';

import { logOut } from 'redux/auth/authOperations';

const pending = state => {
  state.isCategoryFetching = true;
};
const rejected = state => {
  state.isCategoryFetching = false;
};

const rejectedFilter = state => {
  state.isCategoryFetching = false;
  state.isError = true;
};

const initialState = {
  isCategoryFetching: false,
  categoryList: [],
  mainCategories: null,
  limitedRecipesByCategory: [],
  allRecipesByCategory: [],
  singleRecipe: null,
  popularRecipes: [],
  recipesByQuery: [],
  isError: false,
};

export const outerRecipesSlice = createSlice({
  name: 'outerRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getLimitedRecipesByCategory.fulfilled, (state, { payload }) => {
        state.limitedRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getAllRecipesByCategory.fulfilled, (state, { payload }) => {
        state.allRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getOneRecipeById.fulfilled, (state, { payload }) => {
        state.singleRecipe = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        state.popularRecipes = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getRecipesByQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery = payload;
        state.isCategoryFetching = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))

      .addCase(getMainCategories.pending, pending)
      .addCase(getLimitedRecipesByCategory.pending, pending)
      .addCase(getAllRecipesByCategory.pending, pending)
      .addCase(getOneRecipeById.pending, pending)
      .addCase(getPopularRecipes.pending, pending)
      .addCase(getRecipesByQuery.pending, pending)

      .addCase(getMainCategories.rejected, rejected)
      .addCase(getLimitedRecipesByCategory.rejected, rejected)
      .addCase(getAllRecipesByCategory.rejected, rejected)
      .addCase(getOneRecipeById.rejected, rejected)
      .addCase(getPopularRecipes.rejected, rejected)
      .addCase(getRecipesByQuery.rejected, rejectedFilter)
      .addCase(getRecipesByIngredient.rejected, rejectedFilter),
});

export default outerRecipesSlice.reducer;

// .addCase(logOut.fulfilled, (state, { payload }) => {})
