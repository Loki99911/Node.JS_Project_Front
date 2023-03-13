import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector } from 'react-redux';
// import { useState } from 'react';

const RecipeInngredientsList = ({ ingredients }) => {
  // const [ingID, setIngID] = useState(false);
  const allOfIngredients = useSelector(getIngredients);

  function getIngDescription(ingName) {
    const ing = allOfIngredients.find(
      ing =>
        ing.strIngredient ===
        ingName.replace(ingName[0], ingName[0].toUpperCase())
    );
    return ing;
  }

  function getDescr(name) {
    const descr = getIngDescription(name);
    if (!descr) {
      return '';
    }
    return descr.strDescription;
  }

  function getID(name) {
    const descr = getIngDescription(name);
    if (!descr) {
      return '';
    }
    return descr.idIngredient;
  }

  return (
    allOfIngredients && (
      <InngredientsWrapper>
        {ingredients.map(inngredient => (
          <RecipeInngredientsItem
            image={inngredient.img}
            strIngredient={inngredient.name}
            key={inngredient.id}
            weight={inngredient.number}
            strDescription={getDescr(inngredient.name)}
            idIngredient={getID(inngredient.name)}
          />
        ))}
      </InngredientsWrapper>
    )
  );
};

export default RecipeInngredientsList;
