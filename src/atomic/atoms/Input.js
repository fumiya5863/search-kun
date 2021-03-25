import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
    type,
    value,
    placeholder,
    onChange
}) => {
    return (
        <Form.Group>
            <Form.Control
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Form.Group>
    );
};

export { Input };