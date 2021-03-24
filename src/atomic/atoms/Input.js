import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
    type,
    value,
    placeholder
}) => {
    return (
        <Form.Group>
            <Form.Control
                type={type}
                value={value}
                placeholder={placeholder}
            />
        </Form.Group>
    );
};

export { Input };