import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

// import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
// import { useSelector } from 'react-redux';

const RecipeInngredientsList = ({ ingredients }) => {
  // const recipe = useSelector(getIngredients);

  return (
    <InngredientsWrapper>
      {ingredients.map(inngredient => (
        <RecipeInngredientsItem
          image={inngredient.image}
          name={inngredient.name}
          // description={bolshoispisok.find(inngredient.name)}
          key={inngredient.id}
          weight={inngredient.weight}
          description={inngredient.descr}
        />
      ))}
    </InngredientsWrapper>
  );
};

export default RecipeInngredientsList;
