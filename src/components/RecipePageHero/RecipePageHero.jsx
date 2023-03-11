import { RecipeHeroConteiner, HeroTitle } from './RecipePageHero.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect, useState } from 'react';

const RecipePageHero = ({ meal }) => {
  const [Meal, setMeal] = useState();

  useEffect(() => {
    if (meal) {
      setMeal(meal);
    }
  }, [meal]);

  return (
    <>
      <RecipeHeroConteiner>
        <HeroTitle>{Meal}</HeroTitle>
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
