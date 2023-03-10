import styled from 'styled-components';

export const ButtonSkewStyle = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;

  color: ${({ styled, theme }) => {
    switch (styled) {
      case 'black':
        return theme.colors.btnTextLight;
      case 'olive':
        return theme.colors.btnTextLight;
      case 'other':
        return theme.colors.btnTextLight;
      case 'transparent':
        return theme.colors.btnTextLight;
      default:
        return 'red';
    }
  }};

  padding: ${p =>
    p.location === 'favorite' || p.location === 'recipes'
      ? '6px 14px'
      : '16px 30px'};

  background-color: ${({ styled, theme }) => {
    switch (styled) {
      case 'black':
        return theme.colors.btnHoverBg;
      case 'olive':
        return theme.colors.mainAccent;
      case 'transparent':
        return 'transparent';
      case 'other':
        return 'transparent';
      default:
        return 'red';
    }
  }};
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

  & svg {
    width: 18px;
    height: 18px;
    stroke: ${p => p.theme.colors.btnTextLight};
  }

  &:hover {
    color: ${({ styled, theme }) => {
      switch (styled) {
        case 'black':
          return theme.colors.btnTextLight;
        case 'olive':
          return theme.colors.btnTextLight;
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
          return theme.colors.mainAccent;
        case 'olive':
          return theme.colors.btnHoverBg;
        case 'transparent':
          return 'transparent';
        case 'other':
          return theme.colors.mainAccent;
        default:
          return 'red';
      }
    }};
    border: ${({ styled, theme }) => {
      return styled === 'transparent'
        ? `1px solid ${theme.colors.mainAccent}`
        : '1px solid transparent';
    }};
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
