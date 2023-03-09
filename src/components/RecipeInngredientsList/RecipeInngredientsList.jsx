import RecipeInngredientsItem from "components/RecipeInngredientsItem/RecipeInngredientsItem";
import { InngredientsWrapper } from "./RecipeInngredientsList.styled";

const RecipeInngredientsList = ({ingredients}) => {
  return (
    <InngredientsWrapper>
      {ingredients.map(inngredient => <RecipeInngredientsItem image={inngredient.image} name={inngredient.name} />)}
    </InngredientsWrapper>
  );
};

export default RecipeInngredientsList;