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

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 28px;
    margin-top: 42px;

    @media (min-width: 768px) {
      gap: 32px;
      margin-top: 40px;
    }

    @media (min-width: 1440px) {
      gap: 14px;
      row-gap: 100px;
      margin-top: 90px;
    }
  }
`;
