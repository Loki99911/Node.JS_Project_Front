import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { ReportsTable } from './Recipe.styled';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleRecipe } from 'redux/outerRecipes/outerRecipesSelectors';
import { getOneRecipeById } from 'redux/outerRecipes/outerRecipesOperations';
import { getOwnRecipeByID } from 'redux/ownRecipes/ownRecipesOperations';
import { getSingleOwnRecipe } from 'redux/ownRecipes/ownRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';

const Recipe = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const { recipeId } = useParams();
  const dispatcher = useDispatch();
  const recipe = useSelector(getSingleRecipe);
  const ownRecipe = useSelector(getSingleOwnRecipe);
  const myRecipe = () => {
    return recipeObj ? recipe : ownRecipe;
  };

  useEffect(() => {
    if (('' + recipeId).length < 10) {
      dispatcher(getOneRecipeById(recipeId));
      setRecipeObj(true);
    } else {
      dispatcher(getOwnRecipeByID(recipeId));
      setRecipeObj(false);
    }
  }, [recipeId, dispatcher]);

  return (
    myRecipe() && (
      <>
        <RecipePageHero
          meal={myRecipe().title}
          idMeal={recipeId}
          about={myRecipe().about}
          cookingTime={myRecipe().cookingTime}
        />
        <Container>
          <ReportsTable>
            <p>Ingredients</p>
            <p>
              Number <span>Add to list</span>
            </p>
          </ReportsTable>
          <RecipeInngredientsList
            ingredients={myRecipe().ingredients}
            recipeId={recipeId}
          />
          <RecipePreparation
            image={myRecipe().imgURL}
            instructions={myRecipe().description}
          />
        </Container>
      </>
    )
  );
};

export default Recipe;
