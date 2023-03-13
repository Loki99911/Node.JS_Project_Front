import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { ReportsTable } from './Recipe.styled';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSingleRecipe } from 'redux/outerRecipes/outerRecipesSelectors';
import { getOneRecipeById } from 'redux/outerRecipes/outerRecipesOperations';
import { useDispatch, useSelector } from 'react-redux';

const Recipe = () => {
  const { recipeId } = useParams();
  const dispatcher = useDispatch();
  const recipe = useSelector(getSingleRecipe);

  useEffect(() => {
    dispatcher(getOneRecipeById(recipeId));
  }, [recipeId, dispatcher]);

  function ObjectConvertor(obj) {
    let array = [];
    for (let i = 1; i <= 20; i++) {
      const strIngredient = `strIngredient${i}`;
      const strMeasure = `strMeasure${i}`;
      const strIngredientImg = `strIngredientImg${i}`;
      if (obj[strIngredient] !== null && obj[strIngredient] !== '') {
        array.push({
          name: obj[strIngredient],
          img: obj[strIngredientImg],
          number: obj[strMeasure],
          id: i,
        });
      }
    }
    console.log(array);
    return array;
  }

  return (
    recipe && (
      <>
        <RecipePageHero meal={recipe.strMeal} />
        <Container>
          <ReportsTable>
            <p>Ingredients</p>
            <p>
              Number <span>Add to list</span>
            </p>
          </ReportsTable>
          <RecipeInngredientsList ingredients={ObjectConvertor(recipe)} />
          <RecipePreparation
            image={recipe.strMealThumb}
            instructions={recipe.strInstructions}
          />
        </Container>
      </>
    )
  );
};

export default Recipe;
