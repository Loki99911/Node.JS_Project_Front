import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { ReportsTable } from './Recipe.styled';

const MainPaigeTitle = 'Salmon Avocado Salad';
const strInstructions =
  'Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.';
const mealImage =
  'https://www.themealdb.com//images//media//meals//1549542994.jpg';
const recipeArray = [
  {
    id: 1,
    image:
      'https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6',
    name: 'Morkwa',
    weight: '300 g',
    descr:
      'A lime is  a citrus fruit, which is typically round,  green in color, 3–6 centimetres in diametr and contains acidic juice vesicles.',
  },
  {
    id: 2,
    image:
      'https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6',
    name: 'Pomidor',
    weight: '1',
    descr:
      'Salmon is the common name for several commercially important species of euryhaline ray-finned fish from the family Salmonidae, which are native to tributaries of the North Atlantic and North Pacific basin.',
  },
  {
    id: 3,
    image:
      'https://us.123rf.com/450wm/cepn/cepn2009/cepn200900012/155940259-fresh-watermelon-isolated-organic-water-melon-slice-on-white-background.jpg?ver=6',
    name: 'Cebula',
    weight: '4 tbs',
    descr:
      'The avocado is a medium-sized, evergreen tree in the laurel family. It is native to the Americas and was first domesticated by Mesoamerican tribes more than 5,000 years ago.',
  },
];

const Recipe = () => {
  return (
    <>
      <RecipePageHero meal={MainPaigeTitle} />
      <Container>
        <ReportsTable>
          <p>Ingredients</p>
          <p>
            Number <span>Add to list</span>
          </p>
        </ReportsTable>
        <RecipeInngredientsList ingredients={recipeArray} />
        <RecipePreparation image={mealImage} instructions={strInstructions} />
      </Container>
    </>
  );
};

export default Recipe;
