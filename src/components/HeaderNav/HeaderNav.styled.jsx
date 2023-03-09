import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(
  NavLink
)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: red;
  }
`;

export const Navi = styled.nav`
  display: flex;
  gap: 30px;
`;
