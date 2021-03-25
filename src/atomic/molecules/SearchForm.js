import React, { useState, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import { Input } from '@atoms/Input';

const StyledForm = styled(Form)`
    width: 80%;
    margin: auto;
`;

const SearchForm = () => {
    const [searchText, setSearchText] = useState('');

    const onChange = useCallback(
        (e) => {
            setSearchText(e.target.value);
        },
        [searchText]
    );
    
    return (
        <StyledForm>
            <Input 
                type="search" 
                value={searchText} 
                placeholder="google検索"
                onChange={onChange}
            />
        </StyledForm>
    );
};

export { SearchForm };