import React, { useState, useCallback } from 'react';
import { Form } from 'react-bootstrap';

import { Input } from '@atoms/Input';

const styledInput = {
    width: '80%',
    margin: 'auto',
};

const SearchForm = () => {
    const [searchText, setSearchText] = useState('');

    const onChange = useCallback(
        (e) => {
            setSearchText(e.target.value);
        },
        [searchText]
    );

    return (
        <Form>
            <Input
                type="search"
                value={searchText}
                placeholder="google検索"
                styledInput={styledInput}
                onChange={onChange}
            />
        </Form>
    );
};

export { SearchForm };
