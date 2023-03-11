import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './auth/authSlice';
import outerRecipesSlice from './outerRecipes/outerRecipesSlice';
import ingredientsSlice from './ingredients/ingredientsSlice';
import ownRecipesSlice from './ownRecipes/ownRecipesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};
const ingredientsPersistConfig = {
  key: 'ingredients',
  storage,
  whitelist: ['ingredients'],
};
const outerRecipesPersistConfig = {
  key: 'outerRecipes',
  storage,
  whitelist: ['mainCategories'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedIngredientsReducer = persistReducer(
  ingredientsPersistConfig,
  ingredientsSlice
);
const persistedOuterRecipesReducer = persistReducer(
  outerRecipesPersistConfig,
  outerRecipesSlice
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    ingredients: persistedIngredientsReducer,
    outerRecipes: persistedOuterRecipesReducer,
    ownRecipes: ownRecipesSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
