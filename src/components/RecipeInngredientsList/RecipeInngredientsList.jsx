import RecipeInngredientsItem from 'components/RecipeInngredientsItem/RecipeInngredientsItem';
import { InngredientsWrapper } from './RecipeInngredientsList.styled';

import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { useSelector } from 'react-redux';

const RecipeInngredientsList = ({ ingredients }) => {
  const allOfIngredients = useSelector(getIngredients);

  function getIngDescription(ingName) {
    const ing = allOfIngredients.find(
      ing =>
        ing.strIngredient ===
        ingName.replace(ingName[0], ingName[0].toUpperCase())
    );
    // if (ing && ing.strDescription !== null) {
    //   ing.strDescription === "";
    //   return ing;
    // }
    return ing;
  }

  return (
    allOfIngredients && (
      <InngredientsWrapper>
        {ingredients.map(inngredient => (
          <RecipeInngredientsItem
            image={
              'https://i.pinimg.com/564x/e9/2b/df/e92bdfc88c52c9600a9f545fbc443d4d.jpg'
            }
            idIngredient={getIngDescription(inngredient.name).idIngredient}
            strIngredient={inngredient.name}
            key={inngredient.id}
            weight={inngredient.number}
            strDescription={getIngDescription(inngredient.name).strDescription}
          />
        ))}
      </InngredientsWrapper>
    )
  );
};

export default RecipeInngredientsList;
