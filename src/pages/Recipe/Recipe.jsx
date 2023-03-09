import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { Container } from "components/Container/Container";
import { ReportsTable } from "./Recipe.styled";


const MainPaigeTitle = "Salmon Avocado Salad"
const recipeArray = [{
  image: "https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6",
  name: "morkwa",
}, {
  image: "https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6",
  name: "pomidor",
}, {
  image: "https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6",
  name: "cebula",
}]

const Recipe = () => {
  return (
    <>
      <RecipePageHero meal={MainPaigeTitle} />
      <Container>
        <ReportsTable>
          <p>
            Ingredients
          </p>
          <p>
            Number <span>Add to list</span>
          </p>
        </ReportsTable>
        <RecipeInngredientsList ingredients={recipeArray}/>
        <RecipePreparation/>
      </Container>
    </>
  );
};

export default Recipe;
