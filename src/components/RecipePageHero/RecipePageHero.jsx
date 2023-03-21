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
import { MotivatedModal } from 'components/MotivatedModal/MotivatedModal';

import { Loader } from 'components/Loader/Loader';

const RecipePageHero = ({ idMeal, recipeObj }) => {
  const [btnText, setBtnText] = useState(false);
  const [triger, setTriger] = useState(0);
  const dispatcher = useDispatch();
  const obj = useSelector(getFavoriteRecipes);

  const isPendingOwn = useSelector(
    state => state.ownRecipes.isOwnRecipesFetching
  );
  const isPending = useSelector(state => state.outerRecipes.isCategoryFetching);

  function deleteFromFav() {
    dispatcher(deleteFavorite(idMeal));
    setBtnText(false);
    return;
  }

  function addtoFavorite() {
    dispatcher(addFavorite(idMeal));
    setBtnText(true);
    obj.length === 0 && setTriger(1);
    obj.length === 9 && setTriger(10);
    return;
  }

  function getIngDescription(recipeName) {
    if (obj !== undefined) {
      const recipe = obj.some(recipe => recipe.strMeal === recipeName);
      return recipe;
    }
    return false;
  }

  useEffect(() => {
    dispatcher(getFavorite({}));
  }, [dispatcher]);

  return (
    <>
      {triger === 1 && <MotivatedModal type="first favorite" isOpen={true} />}
      {triger === 10 && <MotivatedModal type="ten-recipes" isOpen={true} />}
      <RecipeHeroConteiner>
        {isPendingOwn || isPending ? (
          <Loader />
        ) : (
          <>
            <HeroTitle>{recipeObj.title}</HeroTitle>
            <HeroText>{recipeObj.about}</HeroText>
            {btnText || getIngDescription(recipeObj.title) ? (
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
            {recipeObj.cookingTime !== '' ? (
              <CookingTime>
                <svg>
                  <use href={sprite + `#icon-clock`} />
                </svg>
                <span>{recipeObj.cookingTime + ` min`}</span>
              </CookingTime>
            ) : (
              <CookingTime></CookingTime>
            )}
          </>
        )}
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
