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
  color: ${theme.colors.sectionHeaderDark};
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
  padding: 10px 24px;
  background-color: ${theme.colors.mainAccent};
  cursor: pointer;
  float: right;
  transition: ${theme.transitions.main};
  &:hover {
    background-color: ${theme.colors.mainDark};
  }
`;

// export const CardDish = styled.li`
//   width: 343px;
//   height: 323px;
//   border-radius: 8px;
//   position: relative;
//   /* overflow: hidden; */
//   @media (min-width: 768px) {
//     width: calc((100% - 32px) / 2);
//   }

//   @media (min-width: 1440px) {
//     width: calc((100% - 42px) / 4);
//   }
// `;

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
