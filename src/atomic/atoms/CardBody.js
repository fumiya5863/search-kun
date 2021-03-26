import React from 'react';
import { Card } from 'react-bootstrap';

const CardBody = ({
    row
}) => {
    const contents = row.map((row, id) => {
        return <p key={id}>
            <a href={row.url}>{row.text}</a>
        </p>
    });
    return (
        <Card.Body>
            {contents}
        </Card.Body>
    );
};

export { CardBody };