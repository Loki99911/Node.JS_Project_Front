import styled from 'styled-components';

export const ButtonSkewStyle = styled.button`
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

  padding: 20px 40px;
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

  width: 130px;
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
`;
