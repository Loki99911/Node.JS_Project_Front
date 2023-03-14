// ------------------ Ingredients List ------------------
// ---- returns an Array of Objects
// ---- this operation will be called during user login
// ---- the resut will be persisted into local storage
// ---- you DON'T need to dispatch operation, just use Selector (!)
// ---- works in tandem with "getAllIngredients()"
export const getIngredients = state => state.ingredients.ingredients;

// ------------------ Recipes by Ingredient ------------------
// ---- returns an Array of Objects
// ---- As an argument you HAVE TO send an ingredient name (String)
// ---- Example: const ingredient = 'cucumber';
// ---- Use with function "getRecipesByIngredient(ingredient)"
export const getRecipesListByIngredient = state =>
  state.ingredients.recipesByIngredients;

// ------------------ Additional ------------------
export const getIsIngredientsFetching = state =>
  state.ingredients.isIngredientsFetching;