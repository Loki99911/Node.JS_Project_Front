import { SearchForm } from '../../SearchForm/SearchForm';
import { SearchBarCont, SelectCon } from './SearchBar.styled';
import Select from 'react-select';
import { useState } from 'react';

const options = [
  { value: 'chocolate', label: 'Title' },
  { value: 'strawberry', label: 'Ingredients' },
];
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
export const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
console.log(selectedOption);
  return (
    <SearchBarCont>
          <SearchForm styled={"olive"} />
      <SelectCon>
        <span>Search by:</span>
        <Select
          defaultValue={{ value: 'chocolate', label: 'Title' }}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          styles={customStyles}
        />
      </SelectCon>
    </SearchBarCont>
  );
};
