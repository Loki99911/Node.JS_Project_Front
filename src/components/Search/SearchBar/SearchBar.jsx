import { SearchForm } from '../../SearchForm/SearchForm';
import { SearchBarCont } from './SearchBar.styled';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';
import { useState } from 'react';

export const SearchBar = ({ setSearchParams, startType, startQuery }) => {
  const [type, setType] = useState('');

  const typeSubmit = inputType => {
    const { value } = inputType;
    setType(value);
  };

  return (
    <SearchBarCont>
      <SearchForm
        styled={'olive'}
        type={type}
        setSearchParams={setSearchParams}
        startQuery={startQuery}
      />
      <SearchTypeSelector startType={startType} typeSubmit={typeSubmit} />
    </SearchBarCont>
  );
};
