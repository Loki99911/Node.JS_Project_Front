import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteRecipes } from 'redux/ownRecipes/ownRecipesSelectors';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';

import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { RecipeBlock } from 'components/RecipeBlock/RecipeBlock';
import { PaginationComp } from 'components/PaginationComp/Pagination';

import img from '../../images/default.jpg';

import { ContentWrapper, Wrapper } from './Favorites.styled';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoriteRecipes);

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Title>Favorites</Title>
        <ContentWrapper>
          {favorites &&
            favorites.length > 0 &&
            favorites.map(item => {
              return (
                <li key={item.idMeal}>
                  <NavLink to={`/recipe/${item.idMeal}`}>
                    <RecipeBlock
                      location="favorite"
                      id={item.idMeal}
                      img={item.strMealThumb ?? img}
                      title={item.strMeal ?? 'No name'}
                      text={
                        <span>{item.strInstructions ?? 'No description'}</span>
                      }
                      time={item.cookingTime ?? '__ min'}
                    />
                  </NavLink>
                </li>
              );
            })}
        </ContentWrapper>
        {favorites && favorites.length > 0 && <PaginationComp />}
      </Container>
    </Wrapper>
  );
};

export default Favorites;
