import RecipeInngredientsItem from "components/RecipeInngredientsItem/RecipeInngredientsItem";

const RecipeInngredientsList = ({ingredients}) => {
  return (
    <ul>
      {ingredients.map(inngredient => <RecipeInngredientsItem/>)}
    </ul>
  );
};

export default RecipeInngredientsList;