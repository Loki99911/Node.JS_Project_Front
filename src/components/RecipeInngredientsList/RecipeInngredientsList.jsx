import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { getShoppingList } from 'redux/ingredients/ingredientsSelectors.js';
import { getShoppingIngredient } from 'redux/ingredients/ingredientsOperations.js';
import { MotivatedModal } from 'components/MotivatedModal/MotivatedModal';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const [triger, setTriger] = useState(0);

  const dispatcher = useDispatch();
  const list = useSelector(getShoppingList);

  useEffect(() => {
    dispatcher(getShoppingIngredient());
    if (list.length === 1) {
      setTriger(1);
    }
  }, [dispatcher, list.length]);

  function getIngDescription(id) {
    if (id !== undefined) {
      const ingridID = list.some(ingrid => ingrid.recipeId === id);
      return ingridID;
    }
    return false;
  }

  return (
    <InngredientsWrapper>
      {triger === 1 && <MotivatedModal type="first shopping" isOpen={true} />}
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
  );
};

export default RecipeInngredientsList;
