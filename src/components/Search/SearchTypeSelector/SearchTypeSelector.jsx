// import Select from 'react-select';
import { SelectCon, SelectStyled } from './SearchTypeSelector.styled';
import { useEffect, useState } from 'react';

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#D9D9D9',
    borderColor: state.isFocused ? 'transparent' : '#D9D9D9',
    boxShadow: state.isFocused ? '0 0 0 1px transparent' : null,
    borderRadius: '6px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.02em',
    textAlign: 'left',
    // opacity: '0.5',
    width: '146px',
    height: '34px',
    border: 'unset',
    '@media (min-width: 768px)': {
      fontSize: '14px',
      lineHeight: '21px',
      width: '175px',
      height: '41px',
    },
    outline: state.isSelected && state.isFocused ? 'grey' : null,
  }),
  contanier: (baseStyles, state) => ({
    ...baseStyles,
    outline: state.isSelected && state.isFocused ? 'grey' : null,
    boxShadow: state.isFocused ? '0 0 0 1px transparent' : null,
    color: 'rgba(0, 0, 0, 0.5) !important',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    '@media (min-width: 768px)': {
      fontSize: '14px',
      lineHeight: '21px',
    },
    letterSpacing: '-0.02em',
    textAlign: 'left',
    // opacity: '0.5',
    color: 'rgba(0, 0, 0, 0.5) !important',
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isSelected ? '#D9D9D9' : baseStyles.backgroundColor,
    color: state.isSelected
      ? 'rgba(0, 0, 0, 0.5) !important'
      : baseStyles.color,
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#8BAA36',
    // opacity: 1,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    opacity: 0,
  }),
  menu: baseStyles => ({
    ...baseStyles,
    margin: 0,
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: 'rgba(0, 0, 0, 0.5) !important',
  }),
};

export const SearchTypeSelector = ({ typeSubmit, startType }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: startType,
    label: startType,
  });

  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredients', label: 'Ingredients' },
  ];

  useEffect(() => {
    typeSubmit(selectedOption);
  }, [selectedOption, typeSubmit]);

  return (
    <SelectCon>
      <span>Search by:</span>
      <SelectStyled
        defaultValue={{ value: startType, label: startType }}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        classNamePrefix="react-select"
        // styles={customStyles}
      />
    </SelectCon>
  );
};
