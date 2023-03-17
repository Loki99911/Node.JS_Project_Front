import styled from 'styled-components';
import Select from 'react-select';

export const SelectCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;
    color: ${p => p.theme.colors.sectionHeader};

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const SelectStyled = styled(Select)`
  & .react-select__control {
    background-color: ${p => p.theme.colors.searchSelectBg};
    border: ${p => p.theme.borders.searchInput};
    outline: none;
    box-shadow: none;
    border-radius: ${p => p.theme.radii.searchSelectBg};
    width: 146px;
    height: 34px;
    font-size: 12px;
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.searchSelectText};

    &--is-focused,
    &--menu-is-open {
      outline: none;
      border: 1px solid transparent;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      width: 175px;
      height: 41px;
    }
  }

  & .react-select__single-value {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[0]};
    text-align: left;
    font-size: 12px;
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.searchSelectText};
  }

  & .react-select-contanier {
    box-shadow: none;
    outline: none;
    border-color: transparent;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
    }
  }

  & .react-select__menu-list {
    background-color: ${p => p.theme.colors.searchDropDownBg};
    border-radius: 0px 0px 6px 6px;
    ${p => p.theme.letterSpacings.content};
    line-height: ${p => p.theme.lineHeights.searchSelect};
    text-align: left;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    color: rgba(0, 0, 0, 0.5) !important;
  }

  & .react-select__option {
    background-color: ${p => p.theme.colors.searchDropDownBg};
    color: rgba(0, 0, 0, 0.5);
  }

  & .react-select__dropdown-indicator {
    color: ${p => p.theme.colors.mainAccent};
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__menu {
    margin: 0;
    border-radius: 0px 0px 6px 6px;
  }

  & .react-select__placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
