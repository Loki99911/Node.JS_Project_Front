import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
// import { PaginationComp } from 'components/PaginationComp/Pagination';
import { SearchCont } from './SearchPage.styled';
import { SearchNoFound } from 'components/Search/SearchNoFound/SearchNoFound';
import { CardMeal } from 'components/CardMeal/CardMeal';
import { SearchBar } from 'components/Search/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesByQuery } from 'redux/outerRecipes/outerRecipesOperations';
import { getRecipesByIngredient } from 'redux/ingredients/ingredientsOperations';
import { getRecipesListByIngredient } from 'redux/ingredients/ingredientsSelectors';
import {
  getIsError,
  getRecipesBySearchQuery,
} from 'redux/outerRecipes/outerRecipesSelectors';
// import { useState } from 'react';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? '';
  const [request, setRequest] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  // console.log(query);
  // console.log(type);
  console.log(setPage);
  console.log(setPerPage);

  const recipesListByIngredient = useSelector(getRecipesListByIngredient);
  const recipesBySearchQuery = useSelector(getRecipesBySearchQuery);
  const errorSearch = useSelector(getIsError);

  console.log(recipesListByIngredient);
  // console.log(recipesBySearchQuery);

  useEffect(() => {
    if (query === '' || type === '') return;

    if (type === 'title') {
      dispatch(getRecipesByQuery(query));
      setRequest(true);
    } else {
      dispatch(
        getRecipesByIngredient({ ingredient: query, page, per_page: perPage })
      );
      setRequest(false);
    }
  }, [dispatch, type, query, page, perPage]);

  return (
    <SearchCont>
      <Container>
        <Title>Search</Title>
        <SearchBar
          setSearchParams={setSearchParams}
          startType={type}
          startQuery={query}
        />
        {request && (
          <ul>
            {recipesBySearchQuery.map(el => (
              <CardMeal meal={el} key={el.idMeal} />
            ))}
          </ul>
        )}
        {!request && (
          <ul>
            {recipesListByIngredient?.meals?.map(el => (
              <CardMeal meal={el} key={el.idMeal} />
            ))}
          </ul>
        )}

        {/* <PaginationComp /> */}
        {errorSearch && <SearchNoFound />}
      </Container>
    </SearchCont>
  );
};

export default SearchPage;
