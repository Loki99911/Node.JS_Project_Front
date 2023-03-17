import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'utils/theme';

export const TitlePrew = styled.p`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: ${theme.letterSpacings.content};
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 32px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
  }
  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const BtnCategories = styled(NavLink)`
  border-radius: 6px;
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.btnTextLight};
  border: ${p => p.theme.borders.mainNavBord};
  padding: 10px 24px;
  background-color: ${theme.colors.mainAccent};
  cursor: pointer;
  float: right;
  transition: ${theme.transitions.main};
  &:hover {
    background-color: ${p => p.theme.colors.mainNavLinkHover};
    border: ${p => p.theme.borders.mainNavBord};
    color: ${p => p.theme.colors.searchDropDownBg};
  }
`;

export const CardWrapper = styled.ul`
  /* margin-top: 0; */
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0;
  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    gap: 14px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const CategoryItem = styled.li``;
