import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { ReportsTable } from './Recipe.styled';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneRecipeById } from 'redux/outerRecipes/outerRecipesOperations';
import { getOwnRecipeByID } from 'redux/ownRecipes/ownRecipesOperations';
import { getSingleOwnRecipe } from 'redux/ownRecipes/ownRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';

const Recipe = () => {
  const { recipeId } = useParams();

  const dispatcher = useDispatch();
  const ownRecipe = useSelector(getSingleOwnRecipe);

  useEffect(() => {
    if (('' + recipeId).length < 10) {
      dispatcher(getOneRecipeById(recipeId));
    } else {
      dispatcher(getOwnRecipeByID(recipeId));
    }
  }, [recipeId, dispatcher]);

  return (
    ownRecipe !== null && (
      <>
        <RecipePageHero recipeObj={ownRecipe} idMeal={recipeId} />
        <Container>
          <ReportsTable>
            <p>Ingredients</p>
            <p>
              Number <span>Add to list</span>
            </p>
          </ReportsTable>
          <RecipeInngredientsList
            ingredients={ownRecipe.ingredients}
            recipeId={recipeId}
          />
          <RecipePreparation
            image={ownRecipe.imgURL}
            instructions={ownRecipe.description}
          />
        </Container>
      </>
    )
  );
};

export default Recipe;
