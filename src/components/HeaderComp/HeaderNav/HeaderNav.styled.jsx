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
  color: ${p => p.theme.colors.mainDark};

  &.active {
    color: ${p => p.theme.colors.mainAccent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainAccent};
  }

  & span {
    display: flex;

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${p => p.theme.colors.mainDark};

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Navi = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
  }
`;
