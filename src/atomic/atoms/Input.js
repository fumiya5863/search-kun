import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ type, value, placeholder, styledInput, onChange }) => {
    return (
        <Form.Group>
            <Form.Control
                type={type}
                value={value}
                placeholder={placeholder}
                style={styledInput}
                onChange={onChange}
            />
        </Form.Group>
    );
};

export { Input };
