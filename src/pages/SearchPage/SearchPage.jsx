import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
// import { PaginationComp } from 'components/PaginationComp/Pagination';
import {SearchCont} from './SearchPage.styled'
import { SearchNoFound } from 'components/Search/SearchNoFound/SearchNoFound';
// import { CardMeal } from 'components/CardMeal/CardMeal';
import { SearchBar } from 'components/Search/SearchBar/SearchBar';

const SearchPage = () => {
  return (
    <SearchCont>
      <Container>
        <Title>Search</Title>
        <SearchBar />
        {/* <CardMeal /> */}
        {/* <PaginationComp /> */}
        <SearchNoFound />
      </Container>
    </SearchCont>
  );
};

export default SearchPage;
