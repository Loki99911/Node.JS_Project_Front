import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';
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
                <ButtonSkew type="submit" text="Search" styled={props.styled}></ButtonSkew>
            </SearchIn>
        </SearchBlock>
    );
};

