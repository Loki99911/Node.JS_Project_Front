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
  color: ${p =>
    p.color === 'light' ? p.theme.colors.mainDark : p.theme.colors.userName};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

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
