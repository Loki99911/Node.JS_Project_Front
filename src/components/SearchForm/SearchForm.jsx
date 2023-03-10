import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput, SearhButton } from './SearchForm.styled';
export const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(inputValue);
  }

  return (
    <SearchBlock>
    <SearchIn onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Beef |"
      />
      <SearhButton type="submit">Search</SearhButton>
    </SearchIn>
    </SearchBlock>
    );
};

