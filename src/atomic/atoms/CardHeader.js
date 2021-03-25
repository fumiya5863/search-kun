import React from 'react';
import { Card } from 'react-bootstrap';

const CardHeader = ({
    title
}) => {
    return (
        <Card.Header>
            {title}
        </Card.Header>
    );
};

export { CardHeader };