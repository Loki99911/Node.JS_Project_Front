import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector } from 'react-redux';

const RecipeInngredientsList = ({ ingredients }) => {
  const allOfIngredients = useSelector(getIngredients);

  return (
    allOfIngredients && (
      <InngredientsWrapper>
        {ingredients.map(inngredient => (
          <RecipeInngredientsItem
            image={inngredient.imgURL}
            strIngredient={inngredient.ingredient}
            key={inngredient.id}
            weight={inngredient.qty}
            strDescription={inngredient.description}
            idIngredient={inngredient.id}
          />
        ))}
      </InngredientsWrapper>
    )
  );
};

export default RecipeInngredientsList;
