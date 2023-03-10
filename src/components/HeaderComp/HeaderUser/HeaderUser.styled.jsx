import styled from 'styled-components';

export const HeaderUserWrapper = styled.div`
  position: relative;
`;
export const HeaderUserButton = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-right: 24px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.userLink};
  color: ${p => p.theme.colors.mainDark};

  & img {
    width: 34px;
    height: 34px;
    border-radius: ${p => p.theme.radii.circle};
  }

  @media screen and (min-width: 768px) {
    margin-right: 50px;

    & img {
      width: 44px;
      height: 44px;
    }
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  transform: translateX(-50px);
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 28px;
  background-color: ${p => p.theme.colors.mainLight};
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
