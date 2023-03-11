import AddRecipe from 'pages/AddRecipe/AddRecipe';
import Categories from 'pages/Categories/Categories';
import Favorites from 'pages/Favorites/Favorites';
import Main from 'pages/Main/Main';
import MyRecipes from 'pages/MyRecipes/MyRecipes';
import Recipe from 'pages/Recipe/Recipe';
import Register from 'pages/Register/Register';
import SearchIngredients from 'pages/SearchIngredients/SearchIngredients';
import ShopingList from 'pages/ShoppingList/ShoppingList';
import Signin from 'pages/Signin/Signin';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute, PublicRoute } from 'service/routes';
// import { getIsLoggedIn } from '../redux/auth/authSelectors';
import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import CategoriesByName from 'pages/CategoriesByName/CategoriesByName';
import MainPage from 'pages/MainPage/MainPage';
import Error from 'pages/Error/Error';
import { useEffect } from 'react';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';

export const App = () => {
  // const isUserLogin = useSelector(getIsLoggedIn);
  const ingredients = useSelector(getIngredients);
  const dispatcher = useDispatch();
  // const isUserLogin = true;

  useEffect(() => {
    if (ingredients.length !== 0) return;
    dispatcher(getAllIngredients());
  }, [ingredients.length, dispatcher]);

  return (
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
          <Route path="/search" element={<SearchIngredients />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="*" element={<Error />} />
        </Route>
      {/* )} */}
      {/* <Route path="*" element={<Navigate to='/main' />} /> */}
    </Routes>
  );
};
