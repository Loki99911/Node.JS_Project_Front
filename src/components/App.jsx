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
import { getIsLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import CategoriesByName from 'pages/CategoriesByName/CategoriesByName';
import MainPage from 'pages/MainPage/MainPage';
import Error from 'pages/Error/Error';

export const App = () => {
  const isUserLogin = useSelector(getIsLoggedIn);
  // const isUserLogin = true;
  return (
    <Routes>
      {!isUserLogin ? (
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
          <Route path="*" element={<Error />} />
        </>
      ) : (
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
      )}
      {/* <Route path="*" element={<Navigate to='/' />} /> */}
    </Routes>
  );
};
