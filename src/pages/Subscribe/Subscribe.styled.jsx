import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 5px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid ${p => p.theme.colors.mainDark};
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.main};
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights[2]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.mainDark};

  &.active {
    color: ${p => p.theme.colors.mainAccent};
    border: 1px solid ${p => p.theme.colors.mainAccent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
    border: 1px solid ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.headerLinks};
  }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
