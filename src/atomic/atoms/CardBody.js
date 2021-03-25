import React from 'react';
import { Card } from 'react-bootstrap';

const CardBody = ({
    contents
}) => {
    return (
        <Card.Body>
            {contents}
        </Card.Body>
    );
};

export { CardBody };