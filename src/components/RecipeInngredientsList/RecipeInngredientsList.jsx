import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const RecipeInngredientsList = ({ ingredients }) => {
  const allOfIngredients = useSelector(getIngredients);

  return (
    allOfIngredients && (
      <InngredientsWrapper>
        {ingredients.map(inngredient => (
          <RecipeInngredientsItem
            image={inngredient.imgURL}
            strIngredient={inngredient.ingredient}
            key={nanoid(6)}
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
