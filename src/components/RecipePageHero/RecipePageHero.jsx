import { RecipeHeroConteiner, HeroTitle } from "./RecipePageHero.styled";

const RecipePageHero = ({meal}) => {
  return (
    <>
      <RecipeHeroConteiner>
        <HeroTitle>{meal}</HeroTitle>
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;