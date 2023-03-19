import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { getShoppingList } from 'redux/ingredients/ingredientsSelectors.js';
import { getShoppingIngredient } from 'redux/ingredients/ingredientsOperations.js';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const allOfIngredients = useSelector(getIngredients);

  const dispatcher = useDispatch();
  const list = useSelector(getShoppingList);
  useEffect(() => {
    dispatcher(getShoppingIngredient());
  }, [dispatcher, list.length]);

  function getIngDescription(id) {
    if (id !== undefined) {
      const ingridID = list.some(ingrid => ingrid.recipeId === id);
      return ingridID;
    }
    return false;
  }

  return (
    allOfIngredients && (
      <InngredientsWrapper>
        {ingredients.map((inngredient, index) => (
          <RecipeInngredientsItem
            image={inngredient.imgURL}
            strIngredient={inngredient.ingredient}
            key={nanoid(6)}
            weight={inngredient.qty ? inngredient.qty : 'any'}
            strDescription={inngredient.description}
            list={list}
            recipeId={recipeId + index}
            inShoppingList={getIngDescription(recipeId + index)}
          />
        ))}
      </InngredientsWrapper>
    )
  );
};

export default RecipeInngredientsList;
