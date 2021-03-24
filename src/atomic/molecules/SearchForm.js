import React, { useState, useCallback, useRef } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import { Input } from '@atoms/Input';

const StyledForm = styled(Form)`
    width: 80%;
    margin: auto;
`;

const SearchForm = () => {
    return (
        <StyledForm
            style={
                FormStyle
            }
        >
            <Input type="search" placeholder="google検索"/>
        </StyledForm>
    );
};

export { SearchForm };