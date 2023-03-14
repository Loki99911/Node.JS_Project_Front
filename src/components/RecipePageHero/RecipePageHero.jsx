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

const avocado = `Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.`;

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
    // const recipe = array.some(
    //   recipe =>
    //     recipe.strMeal ===
    //     recipeName.replace(recipeName[0], recipeName[0].toUpperCase())
    // );
    return false;
  }

  useEffect(() => {
    dispatcher(getFavorite());
  }, [dispatcher]);

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
        <HeroText>{avocado}</HeroText>
        {console.log(btnText)}
        {btnText || getIngDescription(meal) ? (
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
        <CookingTime>
          <svg>
            <use href={sprite + `#icon-clock`} />
          </svg>
          <span> 2-3 weeks</span>
        </CookingTime>
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
