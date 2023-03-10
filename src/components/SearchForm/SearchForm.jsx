import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput, SearhButton } from './SearchForm.styled';
export const SearchForm = (props) => {
  const [searchValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(searchValue);
  }

  return (
    <SearchBlock>
<SearchIn onSubmit={handleSubmit}>
      <SearchInput type="text" value={searchValue} placeholder="Beef |" onChange={handleInputChange} />
      {/* <SearhButton type="submit">Search</SearhButton> */}
      <ButtonSkew type="submit" text="Search" styled="black"></ButtonSkew>
    </SearchIn>
</SearchBlock>


    // {/* <SearchIn onSubmit={handleSubmit}>
    //   <form
    //     type="text"
    //     value={inputValue}
    //     onChange={handleChange}
    //     placeholder="Beef |"
        
    //   />
    //   <SearhButton type="submit">Search</SearhButton>
    // </SearchIn>
    // </SearchBlock> */}
    );
};

