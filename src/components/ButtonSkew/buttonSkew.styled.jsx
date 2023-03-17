import styled from 'styled-components';

export const ButtonSkewStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;

  color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.btnTextLight
      : p.styled === 'olive'
      ? p.theme.colors.btnTextLight
      : p.styled === 'other'
      ? p.theme.colors.mainBtnText
      : p.styled === 'transparent'
      ? p.theme.colors.mainDark
      : 'red'};

  padding: ${p =>
    p.location === 'favorite' || p.location === 'recipes'
      ? '6px 14px'
      : '16px 30px'};

  background-color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.recipeBlockBtnBg
      : p.styled === 'olive'
      ? p.theme.colors.mainAccent
      : p.styled === 'other'
      ? 'transparent'
      : p.styled === 'transparent'
      ? 'transparent'
      : 'red'};

  outline: none;
  border: none;

  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;

  text-align: center;

  border: ${({ styled, theme }) => {
    switch (styled) {
      case 'other':
        return `1px solid ${theme.colors.mainAccent}`;
      case 'transparent':
        return `1px solid ${theme.colors.btnTextLight}`;
      default:
        return '1px solid transparent';
    }
  }};

  cursor: pointer;
  transition: ${({ theme }) => {
    return theme.transitions.main;
  }};

  &:hover {
    color: ${({ styled, theme }) => {
      switch (styled) {
        case 'black':
          return theme.colors.mainSerchHoverText;
        case 'olive':
          return theme.colors.searchDropDownBg;
        case 'other':
          return theme.colors.btnTextLight;
        case 'transparent':
          return theme.colors.mainAccent;
        default:
          return 'red';
      }
    }};
    background-color: ${({ styled, theme }) => {
      switch (styled) {
        case 'black':
          return theme.colors.footerSMlinks;
        case 'olive':
          return theme.colors.searchFormHoverBtn;
        case 'transparent':
          return 'transparent';
        case 'other':
          return theme.colors.mainAccent;
        default:
          return 'red';
      }
    }};
    border: ${p =>
      p.styled === 'black'
        ? `1px solid ${p.theme.colors.mainAccent}`
        : p.styled === 'olive'
        ? p.theme.borders.mainNavBord
        : p.styled === 'transparent'
        ? `1px solid ${p.theme.colors.mainAccent}`
        : '1px solid transparent'};
  }

  @media screen and (min-width: 768px) {
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '12px 32px'
        : '16px 32px'};
    min-width: 130px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '18px 44px'
        : '20px 40px'};
    min-width: 160px;
  }
`;
