import styled from 'styled-components';

export const InngredientsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 96px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;
