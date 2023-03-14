import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';

export const SearchForm = ({ setSearchParams, type, styled }) => {
  const [searchValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams(
      new URLSearchParams({
        query: searchValue,
        type,
      })
    );
  }

  return (
    <SearchBlock>
      <SearchIn onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchValue}
        //   placeholder="Beef |"
          onChange={handleInputChange}
        />
        <ButtonSkew type="submit" text="Search" styled={styled}></ButtonSkew>
      </SearchIn>
    </SearchBlock>
  );
};
