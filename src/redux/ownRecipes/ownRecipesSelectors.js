// ------------------ Own Recipes ------------------
// ---- returns an Array of Objects
// ---- Use with function "getOwnRecipes()"
export const getOwnRecipes = state => state.ownRecipes.ownRecipes;

// ------------------ Favorites ------------------
// ---- returns an Array of Objects
// ---- Use with function "getFavorite()"
export const getFavoriteRecipes = state => state.ownRecipes.favorites;

// ------------------ Additional ------------------
export const getIsOwnRecipesFetching = state =>
  state.ownRecipes.isOwnRecipesFetching;
