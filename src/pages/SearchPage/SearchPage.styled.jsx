import { SearchBlock } from 'components/SearchForm/SearchForm.styled';
import styled from 'styled-components';

export const SearchCont = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 204px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 203px;
  }

  ${SearchBlock} {
    margin: 0 auto;
  }
`;
