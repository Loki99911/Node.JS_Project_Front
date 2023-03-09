import { RecipeHeroConteiner, HeroTitle } from "./RecipePageHero.styled";
import { ButtonSkew } from "components/ButtonSkew/ButtonSkew";

const RecipePageHero = ({meal}) => {
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