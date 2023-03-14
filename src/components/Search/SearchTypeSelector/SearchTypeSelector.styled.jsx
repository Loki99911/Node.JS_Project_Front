import styled from 'styled-components';
import Select from 'react-select';

export const SelectCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;

  /* .css-1dimb5e-singleValue {
    color: rgba(0, 0, 0, 0.5);
  } */
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
  &.react-select__control {
    background-color: #d9d9d9;
    border-color: #d9d9d9;
    border-radius: 6px;
    width: 146px;
    height: 34px;
    border: unset;
    &:focus {
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
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
  }

  &.react-select-contanier {
    outline: none;
    box-shadow: none;
    color: rgba(0, 0, 0, 0.5) !important;

    &:focus {
      outline: grey;
      box-shadow: 0 0 0 1px transparent;
    }
  }

  &.react-select__menu-list {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(0, 0, 0, 0.5) !important;
  }

  &.react-select__option {
    background-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.5) !important;
  }

  &.react-select__dropdown-indicator {
    fill: #8baa36;
  }

  &.react-select__dropdown-separator {
    opacity: 0;
  }

  &.react-select__menu {
    margin: 0;
  }

  & .react-select__placeholder {
    color: rgba(0, 0, 0, 0.5) !important;
  }
`;
