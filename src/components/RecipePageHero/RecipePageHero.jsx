import { RecipeHeroConteiner, HeroTitle } from './RecipePageHero.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';
import { getFavoriteRecipes } from 'redux/ownRecipes/ownRecipesSelectors';
import {
  addFavorite,
  deleteFavorite,
} from 'redux/ownRecipes/ownRecipesOperations';
const RecipePageHero = ({ meal, RecipeId }) => {
  // const [btnText, setBtnText] = useState(false);
  const dispatcher = useDispatch();
  const array = useSelector(getFavoriteRecipes);

  function deleteFromFav() {
    dispatcher(deleteFavorite(RecipeId));
  }

  function addtoFavorite() {
    console.log(RecipeId);
    dispatcher(addFavorite(RecipeId));
    return;
  }

  function getIngDescription(recipeName) {
    const recipe = array.some(
      recipe =>
        recipe.strMeal ===
        recipeName.replace(recipeName[0], recipeName[0].toUpperCase())
    );
    console.log(recipe);
    return recipe;
  }

  useEffect(() => {
    dispatcher(getFavorite());
  }, [dispatcher]);
  // const [Meal, setMeal] = useState();

  // useEffect(() => {
  //   if (meal) {
  //     setMeal(meal);
  //   }
  // }, [meal]);

  return (
    <>
      <RecipeHeroConteiner>
        <HeroTitle>{meal}</HeroTitle>
        {getIngDescription(meal) ? (
          <ButtonSkew
            type="button"
            text="delete from favorite recipes"
            styled="other"
            location="recipes"
            onclick={deleteFromFav}
          />
        ) : (
          <ButtonSkew
            type="button"
            text="add to favorite recipes"
            styled="other"
            location="recipes"
            fn={addtoFavorite}
          />
        )}
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
