import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

// const Input = ({ type, value, placeholder, styledInput, onChange }) => {
//     return (
//         <Form.Group>
//             <Form.Control
//                 type={type}
//                 value={value}
//                 placeholder={placeholder}
//                 style={styledInput}
//                 onChange={onChange}
//             />
//         </Form.Group>
//     );
// };

const Input = ({ className, type, value, placeholder, onChange }) => (
    <Fragment>
        <Form.Control
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Fragment>
);

export { Input };
