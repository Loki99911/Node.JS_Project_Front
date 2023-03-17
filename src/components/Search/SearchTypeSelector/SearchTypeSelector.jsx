import { SelectCon, SelectStyled } from './SearchTypeSelector.styled';
import { useEffect, useState } from 'react';

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
        defaultValue={{
          value: startType,
          label: startType.charAt(0).toUpperCase() + startType.slice(1),
        }}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        classNamePrefix="react-select"
      />
    </SelectCon>
  );
};
