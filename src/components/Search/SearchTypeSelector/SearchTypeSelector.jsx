import Select from 'react-select';
import { SelectCon } from './SearchTypeSelector.styled';
import { useEffect, useState } from 'react';
const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#D9D9D9',
    borderColor: state.isFocused ? 'transparent' : '#D9D9D9',
    boxShadow: state.isFocused && '0 0 0 1px transparent',
    borderRadius: '6px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.02em',
    textAlign: 'left',
    opacity: '0.5',
    width: '146px',
    height: '34px',
    '@media (min-width: 768px)': {
      fontSize: '14px',
      lineHeight: '21px',
      width: '175px',
      height: '41px',
    },
    '@media (min-width: 1440px)': {
      width: '198px',
      height: '49px',
    },
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
    opacity: '0.5',
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isSelected ? '#D9D9D9' : baseStyles.backgroundColor,
    color: state.isSelected ? '#000000' : baseStyles.color,
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#8BAA36',
    opacity: 1,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    opacity: 0,
  }),
  menu: baseStyles => ({
    ...baseStyles,
    margin: 0,
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
      <Select
        defaultValue={{ value: startType, label: startType }}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        styles={customStyles}
      />
    </SelectCon>
  );
};
