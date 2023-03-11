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
    console.log(ing);
    if (ing && ing.strDescription !== null) {
      return ing.strDescription;
    }
    return '';
  }

  return (
    <InngredientsWrapper>
      {ingredients.map(inngredient => (
        <RecipeInngredientsItem
          image={
            'https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6'
          }
          name={inngredient.name}
          key={inngredient.id}
          weight={inngredient.number}
          description={getIngDescription(inngredient.name)}
        />
      ))}
    </InngredientsWrapper>
  );
};

export default RecipeInngredientsList;
