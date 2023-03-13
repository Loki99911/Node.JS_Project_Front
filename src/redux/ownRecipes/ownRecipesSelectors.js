// ------------------ Own Recipes ------------------
// ---- returns an Array of Objects
// ---- Use with function "getOwnRecipes()"
export const getCustomRecipes = state => state.ownRecipes.ownRecipes;

// ------------------ Favorites ------------------
// ---- returns an Array of Objects
// ---- Use with function "getFavorite()"
export const getFavoriteRecipes = state => state.ownRecipes.favorites;

// ------------------ Own Recipe by ID ------------------
// ---- returns an Object
// ---- Use with function "getOwnRecipeByID('4657855345')"
export const getSingleOwnRecipe = state => state.ownRecipes.singleRecipe;

// ------------------ Additional ------------------
export const getIsOwnRecipesFetching = state =>
  state.ownRecipes.isOwnRecipesFetching;
