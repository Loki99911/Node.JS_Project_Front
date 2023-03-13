import { SearchBlock } from 'components/SearchForm/SearchForm.styled';
import styled from 'styled-components';

export const SearchBarCont = styled.div`
  ${SearchBlock} {
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      margin-bottom: 28px;
      margin-top: -32px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: -50px;
    }
  }
`;
