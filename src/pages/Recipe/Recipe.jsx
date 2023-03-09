import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { Container } from "components/Container/Container";
import { ReportsTable } from "./Recipe.styled";


const MainPaigeTitle = "Salmon Avocado Salad"
const recipeArray = ["morkwa", "pomidor", "kartoszka"]

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
