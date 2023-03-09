import styled from 'styled-components';

export const InngredientsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;