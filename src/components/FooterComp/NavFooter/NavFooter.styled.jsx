import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainLight};
  transition: ${p => p.theme.transitions.main};

  &.active {
    color: ${p => p.theme.colors.mainAccent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
  }
`;

export const NavFooterCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;
