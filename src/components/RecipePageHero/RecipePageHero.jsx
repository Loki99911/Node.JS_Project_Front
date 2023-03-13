import { RecipeHeroConteiner, HeroTitle } from './RecipePageHero.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';
import { getFavoriteRecipes } from 'redux/ownRecipes/ownRecipesSelectors';
import {
  addFavorite,
  deleteFavorite,
} from 'redux/ownRecipes/ownRecipesOperations';
const RecipePageHero = ({ meal, idMeal }) => {
  const [btnText, setBtnText] = useState(false);

  const dispatcher = useDispatch();
  const array = useSelector(getFavoriteRecipes);

  function deleteFromFav() {
    dispatcher(deleteFavorite(idMeal));
    setBtnText(false);
    // console.log(btnText);
    return;
  }

  // function toFavorite() {
  //   console.log(btnText);

  //   if (btnText) {
  //     dispatcher(deleteFavorite(idMeal));
  //     setBtnText(false);
  //     console.log(btnText);
  //     return;
  //   }

  //   dispatcher(addFavorite(idMeal));
  //   setBtnText(true);
  //   return;
  // }

  function addtoFavorite() {
    dispatcher(addFavorite(idMeal));
    setBtnText(true);
    // console.log(btnText);
    return;
  }

  function getIngDescription(recipeName) {
    const recipe = array.some(
      recipe =>
        recipe.strMeal ===
        recipeName.replace(recipeName[0], recipeName[0].toUpperCase())
    );
    return recipe;
  }

  useEffect(() => {
    dispatcher(getFavorite());
  }, [dispatcher, btnText]);
  // const [Meal, setMeal] = useState();

  // useEffect(() => {
  //   if (meal) {
  //     setMeal(meal);
  //   }
  // }, [meal]);

  return (
    <>
      <RecipeHeroConteiner>
        <HeroTitle>{meal}</HeroTitle>
        {console.log(btnText)}
        {getIngDescription(meal) ? (
          <ButtonSkew
            type="button"
            text={'delete from favorite recipes'}
            styled="other"
            location="recipes"
            fn={deleteFromFav}
          />
        ) : (
          <ButtonSkew
            type="button"
            text="add to favorite recipes"
            styled="other"
            location="recipes"
            fn={addtoFavorite}
          />
        )}
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
