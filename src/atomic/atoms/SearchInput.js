import React from 'react';
import { Form } from 'react-bootstrap';

// google検索
const SearchInput = ({
  className,
  placeholder,
  value,
  onChange
}) => {
  return (
    <Form.Control
      className={className}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export {
  SearchInput
};