import styled from 'styled-components';

export const UserMenu = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  transform: translateX(-50px);
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 28px;
  background-color: ${p => p.theme.colors.bodyBg};
  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.image};

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EditBtn = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.headerLinks};
  font-size: 14px;
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};

  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`;

export const LogOutBtn = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 10px;
  white-space: nowrap;
  color: ${p => p.theme.colors.btnTextLight};
  padding: 12px 30px;
  background-color: ${p => p.theme.colors.mainAccent};
  outline: none;
  border: 1px solid transparent;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.mainNavBord};
    color: ${p => p.theme.colors.mainSerchHoverText};
    background-color: ${p => p.theme.colors.searchFormHoverBtn};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainSerchHoverText};
  }

  & svg {
    width: 18px;
    height: 18px;
    stroke: ${p => p.theme.colors.btnTextLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }
`;
