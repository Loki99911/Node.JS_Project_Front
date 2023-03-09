import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: #8baa36;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #8baa36;
  }
`;

export const Navi = styled.nav`
  display: flex;
  gap: 30px;
`;
