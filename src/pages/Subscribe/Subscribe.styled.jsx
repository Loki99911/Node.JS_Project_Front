import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.main};
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p =>
    p.navcolor === 'light' ? p.theme.colors.mainDark : p.theme.colors.userName};

  &.active {
    color: ${p => p.theme.colors.mainAccent};
    font-weight: ${p => p.theme.fontWeights[2]};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
    font-weight: ${p => p.theme.fontWeights[2]};
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.headerLinks};
  }
`;
