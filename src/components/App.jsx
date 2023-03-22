import AddRecipe from 'pages/AddRecipe/AddRecipe';
import Main from 'pages/Main/Main';
import Register from 'pages/Register/Register'; 
import Signin from 'pages/Signin/Signin'; 
import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'service/routes';
import {
  getAccessToken,
} from '../redux/auth/authSelectors';
// import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import Error from 'pages/Error/Error';
import { lazy, useEffect } from 'react';
// import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import { GlobalStyle } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme as lightMode, darkTheme as darkMode } from 'utils/theme';
import { getMode } from 'redux/theme/themeSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from 'redux/auth/authOperations';
import Subscribe from 'pages/Subscribe/Subscribe';

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
  const token = useSelector(getAccessToken);
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode;

  const dispatcher = useDispatch();

  useEffect(() => {
    if (token === null) return;
    dispatcher(getCurrentUser());
  }, [dispatcher, token]);

  return (
    <ThemeProvider theme={themeMode}>
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
    </ThemeProvider>
  );
};