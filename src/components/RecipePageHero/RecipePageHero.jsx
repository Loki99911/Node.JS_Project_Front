import { RecipeHeroConteiner, HeroTitle } from './RecipePageHero.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';
import { getFavoriteRecipes } from 'redux/ownRecipes/ownRecipesSelectors';

const RecipePageHero = ({ meal }) => {
  // const [btnText, setBtnText] = useState(false);
  const dispatcher = useDispatch();
  const array = useSelector(getFavoriteRecipes);

  function getIngDescription(ingName) {
    const ing = array.some(
      ing =>
        ing.strMeal === ingName.replace(ingName[0], ingName[0].toUpperCase())
    );
    console.log(ing);
    return ing;
  }

  useEffect(() => {
    dispatcher(getFavorite());
  }, [dispatcher]);
  console.log(array);
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
          />
        ) : (
          <ButtonSkew
            type="button"
            text="add to favorite recipes"
            styled="other"
            location="recipes"
          />
        )}
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
