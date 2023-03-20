import AddRecipe from 'pages/AddRecipe/AddRecipe';
import Main from 'pages/Main/Main'; //lazy
import Register from 'pages/Register/Register'; //lazy
import Signin from 'pages/Signin/Signin'; //lazy
// import Categories from 'pages/Categories/Categories';//lazy
// import Favorites from 'pages/Favorites/Favorites';//lazy
// import MyRecipes from 'pages/MyRecipes/MyRecipes';//lazy
// import Recipe from 'pages/Recipe/Recipe';//lazy
// import SearchPage from 'pages/SearchPage/SearchPage';//lazy
// import ShopingList from 'pages/ShoppingList/ShoppingList';//lazy
// import CategoriesByName from 'pages/CategoriesByName/CategoriesByName';//lazy
// import MainPage from 'pages/MainPage/MainPage';//lazy
import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from 'service/routes';
import { getIsLoggedIn, getIsUserFetching } from '../redux/auth/authSelectors';
import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector, useDispatch } from 'react-redux';

import Error from 'pages/Error/Error';
import { lazy, useEffect } from 'react';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import { GlobalStyle } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme as lightMode, darkTheme as darkMode } from 'utils/theme';
import { getMode } from 'redux/theme/themeSelector';
import {
  getFullCategoryList,
  getPopular,
} from 'redux/outerRecipes/outerRecipesSelectors';
import {
  getCategoryList,
  getPopularRecipes,
} from 'redux/outerRecipes/outerRecipesOperations';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from 'redux/auth/authOperations';
import Subscribe from 'pages/Subscribe/Subscribe';
// const Main = lazy(() => import('pages/Main/Main'));
// const Register = lazy(() => import('pages/Register/Register'));
// const Signin = lazy(() => import('pages/Signin/Signin'));
// const SharedLayout = lazy(() => import('../components/SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const Categories = lazy(() => import('pages/Categories/Categories'));
const MyRecipes = lazy(() => import('pages/MyRecipes/MyRecipes'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShopingList = lazy(() => import('pages/ShoppingList/ShoppingList'));
const Recipe = lazy(() => import('pages/Recipe/Recipe'));
const CategoriesByName = lazy(() =>
  import('pages/CategoriesByName/CategoriesByName')
);

export const App = () => {
  const isUserFetching = useSelector(getIsUserFetching);
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode; //selectedMode.mode === 'light' ? lightMode : darkMode;
  const isUserLogin = useSelector(getIsLoggedIn);
  const ingredients = useSelector(getIngredients);
  const categories = useSelector(getFullCategoryList);
  const popularRecipes = useSelector(getPopular);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(getCurrentUser());
  }, [dispatcher]);

  useEffect(() => {
    if (isUserLogin === true && popularRecipes.length === 0) {
      dispatcher(getPopularRecipes());
    }
    if (isUserLogin === true && ingredients.length === 0) {
      dispatcher(getAllIngredients());
    }
    if (isUserLogin === true && categories.length === 0) {
      dispatcher(getCategoryList());
    }
  }, [dispatcher, ingredients, categories, isUserLogin, popularRecipes]);

  return (
    <ThemeProvider theme={themeMode}>
      {isUserFetching} ? (
      <Loader />
      ) : (
      <GlobalStyle />
      <Routes>
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
          <Route
            path="/confirm-email"
            element={
              <PublicRoute>
                <Subscribe />
              </PublicRoute>
            }
          />
        </>
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
      </Routes>
      <ToastContainer />
      );
    </ThemeProvider>
  );
};
