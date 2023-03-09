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
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { PrivateRoute, PublicRoute } from 'service/routes';

export const App = () => {
  // const isUserLogin = useSelector(getUserLogin);
  const isUserLogin = true;
  return (
    <Routes>
      {isUserLogin && (
        <>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
        </>
      )}
      {!isUserLogin && (
        <Route path="/" element={<SharedLayout />}>
          <Route path="/categories" element={<Categories />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/my" element={<MyRecipes />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/shopping-list" element={<ShopingList />} />
          <Route path="/search" element={<SearchIngredients />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
        </Route>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
