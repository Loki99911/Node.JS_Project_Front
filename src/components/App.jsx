import AddRecipe from 'pages/AddRecipe/AddRecipe';
import Categories from 'pages/Categories/Categories';
import Favorites from 'pages/Favorites/Favorites';
import Main from 'pages/Main/Main';
import MyRecipes from 'pages/MyRecipes/MyRecipes';
import Recipe from 'pages/Recipe/Recipe';
import Register from 'pages/Register/Register';
import SearchPage from 'pages/SearchPage/SearchPage';
import ShopingList from 'pages/ShoppingList/ShoppingList';
import Signin from 'pages/Signin/Signin';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute, PublicRoute } from 'service/routes';
import { getIsLoggedIn } from '../redux/auth/authSelectors';
import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import CategoriesByName from 'pages/CategoriesByName/CategoriesByName';
import MainPage from 'pages/MainPage/MainPage';
import Error from 'pages/Error/Error';
import { useEffect } from 'react';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import { GlobalStyle } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme as lightMode, darkTheme as darkMode } from 'utils/theme';
import { getMode } from 'redux/theme/themeSelector';
import { getFullCategoryList } from 'redux/outerRecipes/outerRecipesSelectors';
import { getCategoryList } from 'redux/outerRecipes/outerRecipesOperations';

export const App = () => {
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode; //selectedMode.mode === 'light' ? lightMode : darkMode;
  const isUserLogin = useSelector(getIsLoggedIn);
  const ingredients = useSelector(getIngredients);
  const categories = useSelector(getFullCategoryList);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (isUserLogin === true && ingredients.length === 0) {
      dispatcher(getAllIngredients());
    }
    if (isUserLogin === true && categories.length === 0) {
      dispatcher(getCategoryList());
    }
  });

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Routes>
        {/* {!isUserLogin ? ( */}
        <>
          <Route
            path="/"
            element={
              <PublicRoute restricted>
                <Main />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute restricted>
                <Signin />
              </PublicRoute>
            }
          />
          {/* <Route path="*" element={<Error />} /> */}
        </>
        {/* ) : ( */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route path="/main" element={<MainPage />} />
          <Route path="/categories" element={<Categories />}>
            <Route path=":categoryName" element={<CategoriesByName />} />
          </Route>
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/my" element={<MyRecipes />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/shopping-list" element={<ShopingList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="*" element={<Error />} />
        </Route>
        {/* )} */}
        {/* <Route path="*" element={<Navigate to='/main' />} /> */}
      </Routes>
    </ThemeProvider>
  );
};
