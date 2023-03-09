import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoryList,
  getLimitedRecipesByCategory,
  getAllRecipesByCategory,
  getOneRecipeById,
  getPopularRecipes,
  getMainCategories,
} from './outerRecipesOperations';

const pending = state => {
  state.isCategoryFetching = true;
};
const rejected = state => {
  state.isCategoryFetching = false;
};

const initialState = {
  isCategoryFetching: false,
  categoryList: [],
  mainCategories: null,
  limitedRecipesByCategory: [],
  allRecipesByCategory: [],
  singleRecipe: null,
  popularRecipes: [],
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

      .addCase(getMainCategories.pending, pending)
      .addCase(getLimitedRecipesByCategory.pending, pending)
      .addCase(getAllRecipesByCategory.pending, pending)
      .addCase(getOneRecipeById.pending, pending)
      .addCase(getPopularRecipes.pending, pending)

      .addCase(getMainCategories.rejected, rejected)
      .addCase(getLimitedRecipesByCategory.rejected, rejected)
      .addCase(getAllRecipesByCategory.rejected, rejected)
      .addCase(getOneRecipeById.rejected, rejected)
      .addCase(getPopularRecipes.rejected, rejected),
});

export default outerRecipesSlice.reducer;

// .addCase(logOut.fulfilled, (state, { payload }) => {})
