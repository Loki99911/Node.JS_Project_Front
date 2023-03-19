import {
  RecipeHeroConteiner,
  HeroTitle,
  CookingTime,
  HeroText,
} from './RecipePageHero.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';
import { getFavoriteRecipes } from 'redux/ownRecipes/ownRecipesSelectors';
import sprite from '../../images/sprite.svg';
import {
  addFavorite,
  deleteFavorite,
} from 'redux/ownRecipes/ownRecipesOperations';

const RecipePageHero = ({ meal, idMeal, about, cookingTime }) => {
  const [btnText, setBtnText] = useState(false);

  const dispatcher = useDispatch();
  const obj = useSelector(getFavoriteRecipes);

  function deleteFromFav() {
    dispatcher(deleteFavorite(idMeal));
    setBtnText(false);
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
    return;
  }

  function getIngDescription(recipeName) {
    if (obj !== undefined) {
      const recipe = obj.some(
        recipe =>
          recipe.strMeal ===
          recipeName.replace(recipeName[0], recipeName[0].toUpperCase())
      );
      return recipe;
    }
    return false;
  }

  useEffect(() => {
    dispatcher(getFavorite({}));
  }, [dispatcher]);

  return (
    <>
      <RecipeHeroConteiner>
        <HeroTitle>{meal}</HeroTitle>
        <HeroText>{about}</HeroText>
        {btnText || getIngDescription(meal) ? (
          <ButtonSkew
            type="button"
            text={'Remove from favorite recipes'}
            styled="other"
            location="recipes"
            fn={deleteFromFav}
          />
        ) : (
          <ButtonSkew
            type="button"
            text="Add to favorite recipes"
            styled="other"
            location="recipes"
            fn={addtoFavorite}
          />
        )}
        {cookingTime !== '' ? (
          <CookingTime>
            <svg>
              <use href={sprite + `#icon-clock`} />
            </svg>
            <span>{cookingTime + ` min`}</span>
          </CookingTime>
        ) : (
          <CookingTime></CookingTime>
        )}
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
