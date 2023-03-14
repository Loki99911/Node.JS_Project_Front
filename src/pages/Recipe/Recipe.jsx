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
  // ownRecipe && console.log(Object.keys(ownRecipe).length);

  useEffect(() => {
    if (('' + recipeId).length < 10) {
      dispatcher(getOneRecipeById(recipeId));
      setRecipeObj(true);
    } else {
      dispatcher(getOwnRecipeByID(recipeId));
      setRecipeObj(false);
    }
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
    // console.log(array);
    return array;
  }

  return (
    myRecipe() && (
      <>
        <RecipePageHero meal={myRecipe().strMeal} idMeal={myRecipe().idMeal} />
        <Container>
          <ReportsTable>
            <p>Ingredients</p>
            <p>
              Number <span>Add to list</span>
            </p>
          </ReportsTable>
          <RecipeInngredientsList ingredients={ObjectConvertor(myRecipe())} />
          <RecipePreparation
            image={myRecipe().strMealThumb}
            instructions={myRecipe().strInstructions}
          />
        </Container>
      </>
    )
  );
};

export default Recipe;
