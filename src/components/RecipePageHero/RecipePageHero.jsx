import { RecipeHeroConteiner, HeroTitle } from './RecipePageHero.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';
// import { getFavoriteRecipes } from 'redux/ownRecipes/ownRecipesSelectors';

const RecipePageHero = ({ meal }) => {
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
        <ButtonSkew
          type="button"
          text="Add to favorite recipes"
          styled="other"
          location="recipes"
        />
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
