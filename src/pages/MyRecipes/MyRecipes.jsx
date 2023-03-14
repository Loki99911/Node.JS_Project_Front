import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCustomRecipes } from 'redux/ownRecipes/ownRecipesSelectors';
import { getOwnRecipes } from 'redux/ownRecipes/ownRecipesOperations';
import { Container } from 'components/Container/Container';
import { RecipeBlock } from 'components/RecipeBlock/RecipeBlock';
import { Title } from 'components/Title/Title';
import { ContentWrapper, Wrapper } from './MyRecipes.styled';

import img from '../../images/default.jpg';
import { PaginationComp } from 'components/PaginationComp/Pagination';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(getCustomRecipes);

  useEffect(() => {
    dispatch(getOwnRecipes());
  }, [dispatch]);

  // console.log(recipes);
  return (
    <Wrapper>
      <Container>
        <Title>My recipes</Title>
        <ContentWrapper>
          {recipes &&
            recipes.length > 0 &&
            recipes.map(item => {
              return (
                <li key={item.id}>
                  <RecipeBlock
                    location="recipes"
                    id={item.idMeal}
                    img={item.strMealThumb ?? img}
                    title={item.strMeal ?? 'No name'}
                    text={
                      <span>{item.strInstructions ?? 'No description'}</span>
                    }
                    time={item.cookingTime ?? '__ min'}
                  />
                </li>
              );
            })}
        </ContentWrapper>
        {recipes && recipes.length > 0 && <PaginationComp />}
      </Container>
    </Wrapper>
  );
};

export default MyRecipes;
